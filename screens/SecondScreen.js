import React from 'react';
import {
    ActivityIndicator,
    AsyncStorage,
    StatusBar,
    StyleSheet,
    View,
    Text,
    Button
  } from 'react-native';


export default class SecondScreen extends React.Component {

    static navigationOptions = {
        title: 'Second screen!',
      };
    
      render() {
        return (
          <View style={styles.container}>
            <Text>This is the Second screen</Text>
          </View>
        );
      }
    
    
  
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  