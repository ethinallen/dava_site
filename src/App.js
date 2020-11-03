import React from "react";
import { withAuthenticator } from '@aws-amplify/ui-react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home'
import NotFoundPage from './components/NotFoundPage'
import SampleDash from './components/SampleDash'

function App () {
  return (
    <div>
      <Router>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/sample" component={SampleDash} />
            <Route path="*" component={NotFoundPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default withAuthenticator(App);
