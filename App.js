import React from 'react';
import { StyleSheet } from 'react-native';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AnimatedTabBar from '@gorhom/animated-tabbar';
import { Feather } from '@expo/vector-icons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LoginScreen from './screens/LoginScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import colors from './config/colors';


const tabs = {
  Home: { // < Screen name
    labelStyle: {
      color: colors.darkmodeHighWhite,
    },
    icon: {
      component: props => <Feather {...props} name="home" size={24} color={colors.darkmodeErrorColor} />,
      activeColor: 'rgba(91,55,183,1)',
      inactiveColor: 'rgba(0,0,0,1)',
    },
    background: {
      activeColor: colors.darkmodeFocused,
      inactiveColor: 'rgba(223,215,243,0)',
    },
  },
  Journey: { // < Screen name
    labelStyle: {
      color: colors.darkmodeHighWhite,
    },
    icon: {
      component: props => <Feather {...props} name="dingding" size={24} color={colors.OrchidPink} />,
      activeColor: 'rgba(17,148,170,1)',
      inactiveColor: 'rgba(0,0,0,1)',
    },
    background: {
      activeColor: colors.darkmodeFocused,
      inactiveColor: 'rgba(207,235,239,0)',
    },
  },
  Profile: { // < Screen name
    labelStyle: {
      color: colors.darkmodeHighWhite,
    },
    icon: {
      component: props => <Feather {...props} name="user" size={24} color={colors.darkmodeMediumWhite} />,
      activeColor: 'rgba(17,148,170,1)',
      inactiveColor: 'rgba(0,0,0,1)',
    },
    background: {
      activeColor: colors.darkmodeFocused,
      inactiveColor: 'rgba(207,235,239,0)',
    },
  },
  Settings: { // < Screen name
    labelStyle: {
      color: colors.darkmodeHighWhite,
    },
    icon: {
      component: props => <Feather {...props} name="settings" size={24} color={colors.lindaPurple} />,
      activeColor: 'rgba(17,148,170,1)',
      inactiveColor: 'rgba(0,0,0,1)',
    },
    background: {
      activeColor: colors.darkmodeFocused,
      inactiveColor: 'rgba(207,235,239,0)',
    },
  },
};

const Tab = createBottomTabNavigator();

// ska denna behållas?
// const globalScreenOptions = {
//   headerStyle: { backgroundColor: '#121212' },
//   headerTitleStyle: { color: 'white' },
//   headerTintColor: 'white',
// };

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBar={props => (
          <AnimatedTabBar tabs={tabs} {...props} style={{ backgroundColor: '#121212'}}/>
        )}
      >
        <Tab.Screen
          name="Home"
          component={WelcomeScreen}
        />
        <Tab.Screen
          name="Journey"
          component={WelcomeScreen}
        />
        <Tab.Screen
          name="Profile"
          component={WelcomeScreen}
        />
        <Tab.Screen
          name="Settings"
          component={WelcomeScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
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