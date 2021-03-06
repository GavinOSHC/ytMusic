import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Provider} from 'react-redux';
import {configureStore} from './src/redux/configureStore';

import DownloadScreen from './src/screens/DownloadScreen';
import LibaryScreen from './src/screens/LibaryScreen';
import MyPlaylistScreen from './src/screens/MyPlaylistScreen';
import CurrentPlaylistScreen from './src/screens/CurrentPlaylistScreen';
import MySongsScreen from './src/screens/MySongsScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const store = configureStore();

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
    <Provider store={store}>
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
    </Provider>
  );
};

export default App;
