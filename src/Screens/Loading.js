import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Content, Spinner, Container } from 'native-base';

class Loading extends Component {
  render() {
    return (
      <Container style = {styles.container}>
          <Content>
            <Spinner style = {{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center',}}
              color='white' />
          </Content>

      </Container>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E03A3E'
  },
  title: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 18,
  }
})

export { Loading };
