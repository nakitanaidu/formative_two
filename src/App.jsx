import React, { Component } from "react";
import { Router } from "@reach/router";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import ViewCandidates from "./components/ViewCandidates";
import AddCandidate from "./components/AddCandidate";
export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navigation />
        <Router>
          <Home path="/" />
          <ViewCandidates path="/viewcandidates" />
          <AddCandidate path="/addcandidate" />
        </Router>
        <div>Hello from nikits</div>
      </React.Fragment>
    );
  }
}
