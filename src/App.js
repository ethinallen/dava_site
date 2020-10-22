import React from "react";
import awsconfig from './config';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import './App.css';
import Home from './components/Home'

function App () {
  return (
    <Home />
  );
}


export default withAuthenticator(App);
