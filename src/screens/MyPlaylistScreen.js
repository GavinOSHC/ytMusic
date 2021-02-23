import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const MyPlaylistScreen = () => {
  return (
    <View style={styles.container}>
      <Text>MyPlaylist Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
  },
});

export default MyPlaylistScreen;
