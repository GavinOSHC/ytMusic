import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import DownloadScreen from './screens/DownloadScreen';
import LibaryScreen from './screens/LibaryScreen';
import MyPlaylistScreen from './screens/MyPlaylistScreen';
import CurrentPlaylistScreen from './screens/CurrentPlaylistScreen';
import MySongsScreen from './screens/MySongsScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function LibaryStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Libary" component={LibaryScreen} />
      <Stack.Screen name="Download Music" component={DownloadScreen} />
      <Stack.Screen name="My Playlists" component={MyPlaylistScreen} />
      <Stack.Screen name="My Songs" component={MySongsScreen} />
    </Stack.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator>
        <Stack.Screen name="Libary" component={LibaryScreen} />
        <Stack.Screen name="Download Music" component={DownloadScreen} />
        <Stack.Screen name="My Playlists" component={MyPlaylistScreen} />
        <Stack.Screen name="My Songs" component={MySongsScreen} />
        <Stack.Screen name="Current Playlist" component={CurrentPlaylistScreen} />
      </Stack.Navigator> */}
      <Tab.Navigator>
        <Tab.Screen name="Download" component={DownloadScreen} />
        <Tab.Screen name="Libary" component={LibaryStack} />
        <Tab.Screen name="My Playlist" component={MyPlaylistScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
