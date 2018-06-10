import React from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, StatusBar} from 'react-native';
import {Content, Input} from 'native-base';
import firebase from 'firebase';

class LoginForm extends React.Component {
  state = { email: '', password: '' };


    onLogin = () => {
      const { email, password } = this.state;
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then((user) => {
          console.log("login successful")
            // If you need to do anything with the user, do it here
            // The user will be logged in automatically by the
            // `onAuthStateChanged` listener we set up in App.js earlier
        })
        .catch((error) => {
          const { code, message } = error;
        });
    }

  render() {
    return (
        <View style = {styles.container}>
          <TextInput
            placeholder = "email address"
            placeholderTextColor="rgba(255,255,255,0.7)"
            returnKeyType="next"
            onSubmitEditing={() => this.passwordInput.focus()}
            keyboardType="email-address"
            autoCorrect= {false}
            autoCapitalize="none"
            onChangeText={email => this.setState({ email })}
            value={this.state.email}
            style ={styles.input}
          />
          <TextInput
            placeholder="password"
            placeholderTextColor="rgba(255,255,255,0.7)"
            returnKeyType="go"
            secureTextEntry
            style={styles.input}
            ref={(input) => this.passwordInput = input}
            onChangeText={ (password) => {this.setState({ password })} }
            value={ this.state.password }
          />

          <TouchableOpacity onPress={this.onLogin} style={styles.buttonContainer}>
            <Text style = {styles.buttonText}>LOGIN</Text>

          </TouchableOpacity>
        </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  input: {
    height: 40,
    backgroundColor: '#E03A3E',
    marginBottom: 10,
    color: '#FFF',
    paddingHorizontal: 10
  },
  buttonContainer: {
    backgroundColor: '#000',
    paddingVertical: 15
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFF',
    fontWeight: '700'
  }
});

export { LoginForm };
