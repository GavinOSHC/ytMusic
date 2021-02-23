import {DW_SONG, DW_SONG_FAILDED} from '../actions';

export default (state = {songDownloaded: false, error: false}, action) => {
  switch (action.type) {
    case DW_SONG:
      return {
        ...state,
        songDownloaded: true,
        error: false,
      };
    case DW_SONG_FAILDED:
      return {
        ...state,
        songDownloaded: false,
        error: true,
      };
    default:
      return state;
  }
};
