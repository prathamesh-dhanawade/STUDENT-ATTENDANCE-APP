import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import db from './config'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Constants from 'expo-constants';


import firebase from 'firebase'
    
    
// You can import from local files
import HomeScreen from './screens/HomeScreen';
import SummaryScreen from './screens/SummaryScreen';

export default class App extends React.Component {
  
  render() {
    return (
      <View>
        <AppContainer/>
        
      </View>
    );
  }
}


var AppNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
  SummaryScreen: SummaryScreen,
 
});

const AppContainer = createAppContainer(AppNavigator);
