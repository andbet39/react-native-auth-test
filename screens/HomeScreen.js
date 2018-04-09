import React from 'react';
import { StackNavigator, SwitchNavigator,TabNavigator } from 'react-navigation';

import SecondScreen from './SecondScreen';
import MainScreen from './MainScreen';

const RootStack = StackNavigator({
Main: {
    screen: MainScreen,
},
Second:{
    screen: SecondScreen
}
});

export default class HomeScreen extends React.Component {

    static navigationOptions = {
        title: 'Welcome to the app!',
      };
    
      render() {
        return <RootStack/>
      }
    
}


