import React, { Component } from 'react';
import { Auth } from 'aws-amplify';

export default class JSignOut extends Component {
  constructor(props) {
    super(props);
    this.signOut = this.signOut.bind(this);
  }

  signOut() {
    Auth.signOut();
  }

  render() {
    return (
      <h1>Hello</h1>
    );
  }
};


export JSignOut;
