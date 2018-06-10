import React from 'react';
import firebase from 'firebase';
import { UnauthNav } from './Screens/Unauthorized';
import { AuthNav } from './Screens/Authorized';
import { Loading } from './Screens';

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      loading: true,
    };
  }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyB386URg6u7--m6ynQ2l7Cno7adOEF0PJo",
      authDomain: "nutriterp-database.firebaseapp.com",
      databaseURL: "https://nutriterp-database.firebaseio.com",
      projectId: "nutriterp-database",
      storageBucket: "nutriterp-database.appspot.com",
      messagingSenderId: "614686008858"
    });
  }

  /**
   * When the App component mounts, we listen for any authentication
   * state changes in Firebase.
   * Once subscribed, the 'user' parameter will either be null
   * (logged out) or an Object (logged in)
   */

  componentDidMount() {
    this.listenForAuth();
  }

  listenForAuth() {
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({
        loading: false,
        user,
      });
    });
  }

  /**
   * Don't forget to stop listening for authentication state changes
   * when the component unmounts.
   */
  componentWillUnmount() {
    this.authSubscription();
  }
  render() {

    // The application is initialising
    if (this.state.loading) return <Loading />;
    // The user is an Object, so they're logged in
    if (this.state.user) return <AuthNav />;

    // The user is null, so they're logged out
    return <UnauthNav />;
  }
}
