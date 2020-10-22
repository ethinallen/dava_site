import React from "react";
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './config';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import './App.css';

Amplify.configure(awsconfig);


const App = () => (
  <div>
    <AmplifySignOut />
    My App
  </div>
);


export default withAuthenticator(App);
