import ytdl from 'react-native-ytdl';

export const DW_SONG = 'DW_SONG';
export const DW_SONG_FAILDED = 'DW_SONG_FAILED';
export const DWING_SONG = 'DWING_SONG';

const RNFS = require('react-native-fs');
const path = RNFS.DocumentDirectoryPath;

const requestDownloadSong = () => {
  return {
    type: DW_SONG,
    payload: 'Downloaded Song',
  };
};

const requestDownloadSongFailed = (error) => {
  return {
    type: DW_SONG_FAILDED,
    payload: error,
  };
};

export const handleDownloadSong = (url) => async (dispatch) => {
  console.log('----Downloading Song------');
  try {
    const id = ytdl.getURLVideoID(url);

    const {videoDetails} = await ytdl.getBasicInfo(url);
    const videoID = videoDetails.title;

    const result = await ytdl(url, {quality: 'highestaudio'});
    const urlToDownload = result[0].url;

    const downloadPath = `${path}/${videoID}.mp3`;

    console.log(downloadPath);

    RNFS.downloadFile({
      fromUrl: urlToDownload,
      toFile: downloadPath,
    }).promise.then(() => {
      console.log('----- download completed -----');
    });
  } catch (error) {
    console.log(error);
  }

  dispatch(requestDownloadSong());
};

// path to song - /data/user/0/com.ytmusic/files/Sometimes.mp3
