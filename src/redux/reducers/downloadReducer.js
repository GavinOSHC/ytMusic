import {DW_SONG, DW_SONG_FAILDED, DW_SONG_DONE} from '../actions';

export default (state = {inProgress: false, error: false}, action) => {
  switch (action.type) {
    case DW_SONG:
      return {
        ...state,
        inProgress: true,
        error: false,
      };
    case DW_SONG_FAILDED:
      return {
        ...state,
        inProgress: false,
        error: true,
      };
    case DW_SONG_DONE:
      return {
        ...state,
        inProgress: false,
        error: false,
      };
    default:
      return state;
  }
};
