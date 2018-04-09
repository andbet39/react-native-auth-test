
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




export default class HomeScreen extends React.Component {

    static navigationOptions = {
        title: 'Setting Screen',
      };
    
      render() {
        return (
          <View style={styles.container}>
            <Button title="Actually, sign me out :)" onPress={this._signOutAsync} />
          </View>
        );
      }
    
    
      _signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
      };

}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  