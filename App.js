import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import { StackNavigator, SwitchNavigator,TabNavigator } from 'react-navigation';
import * as firebase from 'firebase';

import HomeScreen from './screens/HomeScreen';
import SignInScreen from './screens/SignInScreen';
import AuthLoadingScreen from './screens/AuthLoadingScreen';
import SettingScreen from './screens/SettingScreen';
import SignupScreen from './screens/SignupScreen';
 

 // Initialize Firebase
 var config = {
  apiKey: "AIzaSyB1C3mRJQffJiJzdUVgJ1zIwnYOgK2FTVw",
  authDomain: "react-auth-test-1d90d.firebaseapp.com",
  databaseURL: "https://react-auth-test-1d90d.firebaseio.com",
  projectId: "react-auth-test-1d90d",
  storageBucket: "react-auth-test-1d90d.appspot.com",
  messagingSenderId: "1066128416956"
};

firebase.initializeApp(config);

const AppStack = TabNavigator({
  Home: { screen: HomeScreen },
  Settings: { screen: SettingScreen },
});

const AuthStack = StackNavigator({ SignIn: SignInScreen,Signup:SignupScreen });

console.disableYellowBox = true;

export default SwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
);



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
