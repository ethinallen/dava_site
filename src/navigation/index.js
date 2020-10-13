import React from "react";
import '../App.css';
import Home from "../components/Home.js"
import HeyRon from "../components/heyRon.js"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ReactLoading from 'react-loading';
// import AuthNavigator from './AuthNavigator';
// import AppNavigator from './AppNavigator';
import Auth from '@aws-amplify/auth';


class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userToken: null,
      loading: true,
    };
    this.signOut = this.signOut.bind(this);
    this.signIn = this.signIn.bind(this);
  }

  async componentDidMount() {
    await this.loadApp();
  }

  async loadApp() {
    await Auth.currentAuthenticatedUser()
      .then((user) => {
        this.signIn(user);
      })
      .catch(() => {
        console.log('err signing in');
      });
    this.setState({
      loading: false,
    });
  }

  async signOut() {
    await Auth.signOut()
      .catch((err) => {
        console.log('ERROR: ', err);
      });
    this.setState({ userToken: null });
  }

  async signIn(user) {
    this.setState({
      userToken: user.signInUserSession.accessToken.jwtToken,
    });
  }

  render() {
    const { userToken, loading } = this.state;
    const showLoadingSpinner = (!userToken && loading);

    if (showLoadingSpinner) {
      const Example = ({ type, color }) => (
      	<ReactLoading type={type} color={color} height={'20%'} width={'20%'} />
      );
      return (
        <Example />
      );
    } else if (!userToken) {
      return(
        <Home />
      );
    } else {
      return (
        <HeyRon />
      );
    }

    return (
      <Home />
    );
  }
}


export default AuthLoadingScreen;
