import {MMKV} from 'react-native-mmkv';

export const writeSong = (songObject) => {
  MMKV.set(songObject.videoID, JSON.stringify(songObject));
};
