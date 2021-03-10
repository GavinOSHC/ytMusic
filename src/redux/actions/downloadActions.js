import ytdl from 'react-native-ytdl';
import {writeSong} from '../../api/DataAPI';

export const DW_SONG = 'DW_SONG';
export const DW_SONG_FAILDED = 'DW_SONG_FAILED';
export const DW_SONG_DONE = 'DW_SONG_DONE';
export const RESET_ERROR = 'RESET_ERROR';

const RNFS = require('react-native-fs');
const path = RNFS.DocumentDirectoryPath;

const requestDownloadSong = () => {
  return {
    type: DW_SONG,
    payload: 'Downloading Song',
  };
};

const requestDownloadSongFailed = (error) => {
  return {
    type: DW_SONG_FAILDED,
    payload: error,
  };
};

const requestDownloadSongDone = () => {
  return {
    type: DW_SONG_DONE,
    payload: 'Downloaded Song',
  };
};

const resetError = () => {
  return {
    type: RESET_ERROR,
    payload: 'reset state',
  };
};

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export const handleDownloadSong = (url) => async (dispatch) => {
  console.log('----Downloading Song------');
  dispatch(requestDownloadSong());
  try {
    const videoID = ytdl.getURLVideoID(url);
    const {videoDetails} = await ytdl.getBasicInfo(url);
    const videoTitle = videoDetails.title;
    const length = videoDetails.lengthSeconds;

    const result = await ytdl(url, {quality: 'highestaudio'});
    const urlToDownload = result[0].url;
    const downloadPath = `${path}/${videoID}.mp3`;

    const songObject = {
      videoID,
      videoTitle,
      length,
      path: downloadPath,
    };

    RNFS.downloadFile({
      fromUrl: urlToDownload,
      toFile: downloadPath,
    }).promise.then(() => {
      writeSong(songObject);
      dispatch(requestDownloadSongDone());
      console.log('----- download completed -----');
    });
  } catch (error) {
    console.log(error);
    dispatch(requestDownloadSongFailed(error));
  }
};

export const resetErrorMessage = () => async (dispatch) => {
  dispatch(resetError());
};

// path to song  android - /data/user/0/com.ytmusic/files/Sometimes.mp3
// path to song ios - /Users/gavin.dhaliwal/Library/Developer/CoreSimulator/Devices/A748A595-DB32-443E-BFE9-8F7076A6D98A/data/Containers/Data/Application/985C66E4-93C1-47AB-9BEF-87DE19D31E8A/Documents/Xqta3VD8h2g.mp3

/**
 * data
 * songs : []
 *
 * {
 *  YTid: yt ID
 *  title : song title
 *  url: path to file - file://${path},
 *  length: seconds
 * }
 *
 *
 * {
 *  "length": "188",
 *  "path": "/Users/gavin.dhaliwal/Library/Developer/CoreSimulator/Devices/A748A595-DB32-443E-BFE9-8F7076A6D98A/data/Containers/Data/Application/985C66E4-93C1-47AB-9BEF-87DE19D31E8A/Documents/RRl_C73vFtQ.mp3",
 *  "videoID": "RRl_C73vFtQ",
 *  "videoTitle": "Juice WRLD - Black & White"
 * }
 */
