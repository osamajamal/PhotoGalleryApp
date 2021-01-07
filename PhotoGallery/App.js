/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React , { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Header from './Screens/Header'
import DropDown from './Screens/DropDown'
import Splash from './Screens/Splash'
import AlbumList from './Screens/AlbumList'
import AlbumGalleryDeatils from './Screens/AlbumGalleryDeatils'


const Stack = createStackNavigator();


export default class App extends Component {
 
  render() {
    return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen name="Splash" component={Splash}  options={{headerShown: false }} />
          <Stack.Screen name="AlbumList" component={AlbumList}  options={{headerShown: false }} />
          <Stack.Screen name="AlbumGalleryDeatils" component={AlbumGalleryDeatils}  options={{headerShown: false }} />
        </Stack.Navigator>
    </NavigationContainer>
    );
  }
}

