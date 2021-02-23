import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const CurrentPlaylistScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Current Playlist Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
  },
});

export default CurrentPlaylistScreen;
