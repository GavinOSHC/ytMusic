import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';


const App = () => {
  return (
    <>
      <View style={styles.container}>
        <Text>App js</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
  },
});

export default App;
