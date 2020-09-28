import React from "react";
import './App.css';
import Home from "./components/Home.js"
import newRon from "./components/heyRon.js"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/heyRon" component={newRon} />
      </Switch>
    </Router>
  );
};
