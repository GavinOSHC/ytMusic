import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const MySongsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>My Songs Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
  },
});

export default MySongsScreen;
