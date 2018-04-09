import React from 'react';
import * as firebase from 'firebase';

import {
  AsyncStorage,
  StyleSheet,
  View
} from 'react-native';

import { Container, Header, Content, Button,Label,Input, Text,Form,Item } from 'native-base';


export default class SignInScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  static navigationOptions = {
    title: 'Please sign in',
  };

  render() {
    return ( 

      <Container >
<Content>
            <Item rounded style={styles.input} >
              <Input placeholder="Email"  onChangeText={(email) => this.setState({email})} />
            </Item>
            <Item rounded style={styles.input} >
              <Input placeholder="Password" onChangeText={(password) => this.setState({password})} />
            </Item>

        <Button  onPress={this.handleSignupButton}>
            <Text>Signup </Text>
        </Button>
        <Button onPress = {this._signInAsync} >
          <Text>SignIn</Text>
        </Button>
      </Content>
      
      </Container>
      );
  }

  _signInAsync = async () => {
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(async (user) => {
        await AsyncStorage.setItem('userToken', user.uid);
        this.props.navigation.navigate('App');
      })
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(error);
      });
  };

  handleSignupButton = () => {
    this.props.navigation.navigate('Signup')
  };

}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  input:{
    marginLeft: 20,
    marginRight: 20,
  }
});