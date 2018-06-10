import React from 'react';
import { StatusBar, Image, KeyboardAvoidingView, View, StyleSheet, Text} from 'react-native';
import {Button, Icon, Header, Left, Body, Title, Right, Container} from 'native-base';
import { LoginForm } from '.';
import firebase from 'firebase';

class Login extends React.Component {

  // <Button transparent
  //   onPress={() => navigate('Starter') }>
  //   <Icon name='arrow-back' style ={{color:"#000", marginTop: 8}} />
  // </Button>

  render() {
    const { navigate } = this.props.navigation;
    return (

      <KeyboardAvoidingView behavior='padding' style = {styles.container}>


          <View style = {styles.logoContainer}>
            <Image
              style = {styles.logo}
              source = {require('../../pics/logoNoTxt.png')}
            />
          </View>

          <View style={styles.formContainer}>
            <LoginForm/>
          </View>

        </KeyboardAvoidingView>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  button: {
    marginTop:10
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  logo: {
    width: 300,
    height: 300
  },
  title: {
    color: '#FFF',
    marginTop: 10,
    width: 160,
    textAlign: 'center',
    opacity: 0.9
  }
});

export { Login };
