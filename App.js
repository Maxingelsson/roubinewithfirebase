import React from 'react';
import { StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './screens/LoginScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import colors from './config/colors';

// ska denna behållas?
// const globalScreenOptions = {
//   headerStyle: { backgroundColor: '#121212' },
//   headerTitleStyle: { color: 'white' },
//   headerTintColor: 'white',
// };

export default function App() {
  return <WelcomeScreen/>
}

// eslint-disable-next-line no-unused-vars
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    marginTop: 200,
  },
});