export const DW_SONG = 'DW_SONG';
export const DW_SONG_FAILDED = 'DW_SONG_FAILED';

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
  console.log(url);
  dispatch(requestDownloadSong());
};
