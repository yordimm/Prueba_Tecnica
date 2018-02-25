/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Navigator,
  ListView
} from 'react-native';

import Gym from './src/components/Gym';
import Navbar from './src/components/Navbar';
import SearchBar from './src/components/SearchBar';
import ListGyms from './src/components/ListGyms';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
 

  render() {
    return (
      <View>
        <Navbar/>
        <SearchBar/>
        <ListGyms/>
     
      </View>
    );
  }
}

