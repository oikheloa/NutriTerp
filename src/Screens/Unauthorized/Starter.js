import React from "react";
import { StatusBar, Image, View } from "react-native";
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content,Text } from "native-base";
import { Col, Row, Grid } from 'react-native-easy-grid';

class Starter extends React.Component {
  render() {
    const { navigate } = this.props.navigation;

    return (
      <Container>

        <Content padder contentContainerStyle = {{flex: 1, alignItems: 'flex-end'}} >
          <Grid style = {{flex: 1, alignItems: 'center'}}>

            <Row size={3}>
              <Image
                source={require('../../pics/logo.png')} style={{alignSelf: 'center', width: 350, height:350}}
              />
            </Row>

            <Row size = {1.5}>
              <Col size={1} style = {{flex: 1, justifyContent: 'center'}} >
                <Button large full dark rounded
                  style={{ width: '100%', marginTop: 10}}
                  onPress={ () => navigate('Login') }>
                  <Text>Login</Text>
                </Button>

                <Button large full rounded
                  style={{ backgroundColor: '#E03A3E', width: '100%', marginTop: 10}}
                  onPress={ () => navigate('Register') }>
                  <Text style = {{color: '#FFF'}}>Register</Text>
                </Button>
              </Col>
            </Row>

          </Grid>

        </Content>



      </Container>
    );
  }


}

export { Starter };
