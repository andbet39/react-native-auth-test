
import React, { Component } from 'react';
import {   AsyncStorage } from 'react-native'
import * as firebase from 'firebase'
import { Container, Content, Button, Text,Form,Input,Label,Item } from 'native-base';

export default class SignupScreen extends Component {


    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password:''
        };
      }


  render() {
    return (


        <Content>
        <Text> Login </Text>
          <Form>
            <Item fixedLabel>
              <Label>Email</Label>
              <Input  onChangeText={(email) => this.setState({email})} />
            </Item>
            <Item fixedLabel last>
              <Label>Password</Label>
              <Input  onChangeText={(password) => this.setState({password})} />
            </Item>
          </Form>

          <Button  onPress={this.handleSignupButton}>
            <Text>Signup </Text>
        </Button>
      </Content>
    

    )
  }

  handleSignupButton=()=>{
      console.log("signup")
      firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then( async (user )=> {
          console.log("Inside async")
          await AsyncStorage.setItem('userToken', user.uid);
          this.props.navigation.navigate('App');
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
      });
  }

 

};
