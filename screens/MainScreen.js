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


export default class MainScreen extends React.Component {

    static navigationOptions = {
        title: 'Main screen!',
      };
    
      render() {
        return (
          <View style={styles.container}>
            <Text>This is the Main screen</Text>
            <Button
                title="Go to Second"
                onPress={() => this.props.navigation.navigate('Second')}
                />
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
  