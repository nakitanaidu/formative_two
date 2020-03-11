import React, { Component } from "react";
import Navigation from "./components/Navigation";
import { Router } from "@reach/router";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navigation />
        <Router>
          
        </Router>
      </React.Fragment>
    );
  }
}
