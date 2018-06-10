import React from "react";
import { StatusBar, Image, View } from "react-native";
import { Form, Item, Input, Container, Header, Title, Left, Icon, Right, Button,
         Body, Content,Text, Card, CardItem, List, ListItem } from "native-base";
import { Col, Row, Grid } from 'react-native-easy-grid';
import firebase from 'firebase';

class Home extends React.Component {
  static navigationOptions = {
    tabBarVisible: true
  }

  constructor() {
    super();
    this.artsRef = firebase.database().ref('Articles');
    this.state = {
      articles: []
    };
  }

  /**
   * When the App component mounts, we listen for any 
   * state changes in Firebase.
   */
  componentDidMount() {
    this.listenForArticles(this.artsRef);
  }

  //listener to get data from firebase and update articles accordingly
  listenForArticles(articleRef) {
    articleRef.on('value', (dataSnapshot) => {
      var articles = [];
      dataSnapshot.forEach((child) => {
        articles.push({
          author: child.val().author,
          summary: child.val().summary,
          thumbnail: child.val().thumbnail,
          fullText: child.val().fullText,
          _key: child.key
        });
      });

      this.setState({
        articles: articles
      });
    });
  }

  renderArticles() {
    return this.state.articles.map(article =>
      <ListItem itemDivider key = {article._key}>
        <Card>
          <Text> {article.author} </Text>
        </Card>
      </ListItem> );
  }

  render() {
    const { navigate } = this.props.navigation;
    signOut = () => {
      firebase.auth().signOut().then(function() {
        console.log('Signed Out');
        }, function(error) {
          console.error('Sign Out Error', error);
       });
    }
    return (
      <Container>
        <Header style = {{backgroundColor:'#a40029'}}>
          <Left />
          <Body>
            <Title style = {{color:"#000"}}>NutriTerp</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>

          <Card>

            <CardItem>
              <Body>
                <Text>
                   frik
                </Text>
              </Body>
            </CardItem>

            <CardItem>
              <Grid>
                  <Col>
                   <Text> P </Text>
                  </Col>

                  <Col>
                    <Text> C </Text>
                  </Col>

                  <Col>
                    <Text> S </Text>
                  </Col>

                  <Col>
                    <Text> F </Text>
                  </Col>
              </Grid>
            </CardItem>
          </Card>

          <List>
              {this.renderArticles()}
          </List>

          <Button onPress = {signOut}>
            <Text> Logout </Text>
          </Button>


        </Content>

      </Container>
    );
  }
}

export { Home };
