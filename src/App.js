import React from "react";
import { withAuthenticator } from '@aws-amplify/ui-react';
import './App.css';
import Home from './components/Home'

function App () {
  return (
    <div>
      <Home />
    </div>
  );
}


export default withAuthenticator(App);
