import React from "react";
import { StatusBar, Image, View } from "react-native";
import { Form, Item, Input, Container, Header, Title, Left, Icon, Right, Button, Body, Content,Text, Card, CardItem } from "native-base";
import firebase from 'firebase';

class Register extends React.Component {
  state = { email: '', password: '', confirmPassword: ''};

  render() {
    const { navigate } = this.props.navigation;
    onRegister = () => {
      const { email, password, confirmPassword } = this.state;
      if (password === confirmPassword) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then((user) => {
            // If you need to do anything with the user, do it here
            // The user will be logged in automatically by the
            // `onAuthStateChanged` listener we set up in App.js earlier
          })
          .catch((error) => {
            const { code, message } = error;
            // For details of error codes, see the docs
            // The message contains the default Firebase string
            // representation of the error
          });
      }
      else {
        console.log('doesnt match');
      }
    }

    return (
      <Container>
        <Content padder>
          <View>
            <Image source={require('../../pics/logoNoTxt.png')} style={{alignSelf: 'center', width: 300, height:300}}/>
          </View>

          <Form>
            <Item>
              <Input
                label='Email Address'
                placeholder='you@domain.com'
                value={this.state.email}
                onChangeText={email => this.setState({ email })}
              />
            </Item>
            <Item>
              <Input
                label='Password'
                autoCorrect={false}
                placeholder='Password'
                secureTextEntry
                value={this.state.password}
                onChangeText={ password => this.setState({ password })}
              />
            </Item>
            <Item>
              <Input
                label='Confirm Password'
                autoCorrect={false}
                placeholder='Confirm Password'
                secureTextEntry
                value={this.state.confirmPassword}
                onChangeText={ confirmPassword => this.setState({ confirmPassword }) }
              />
            </Item>
          </Form>

          <Button full rounded dark
            style={{ marginTop: 10 }}
            onPress={ onRegister }>
            <Text>Register!</Text>
          </Button>

        </Content>
      </Container>
    );
  }


}

export { Register };
