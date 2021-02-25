import ytdl from 'react-native-ytdl';

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
    //const id = ytdl.getURLVideoID(url);
    //const {videoDetails} = await ytdl.getBasicInfo(url);
    // const videoID = videoDetails.title;
    // const result = await ytdl(url, {quality: 'highestaudio'});
    // const urlToDownload = result[0].url;
    // const downloadPath = `${path}/${videoID}.mp3`;
    // console.log(downloadPath);
    // RNFS.downloadFile({
    //   fromUrl: urlToDownload,
    //   toFile: downloadPath,
    // }).promise.then(() => {
    //   console.log('----- download completed -----');
    // });
    await delay(5000);
    dispatch(requestDownloadSongDone());
    console.log('song done');
  } catch (error) {
    console.log(error);
    dispatch(requestDownloadSongFailed(error));
  }
};

export const resetErrorMessage = () => async (dispatch) => {
  dispatch(resetError());
};

// path to song - /data/user/0/com.ytmusic/files/Sometimes.mp3
