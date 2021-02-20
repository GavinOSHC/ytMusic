import {DW_SONG, DW_SONG_FAILDED} from '../actions';

export default (
  state = {songDownloaded: false, error: false, writeToFile: false},
  action,
) => {
  switch (action.type) {
    case DW_SONG:
      return {
        ...state,
        songDownloaded: true,
        writeToFile: true,
        error: false,
      };
    case DW_SONG_FAILDED:
      return {
        ...state,
        songDownloaded: false,
        writeToFile: false,
        error: true,
      };
    default:
      return state;
  }
};
