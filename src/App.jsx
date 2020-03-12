import React, { Component } from "react";
import { Router } from "@reach/router";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import ViewEvents from "./components/ViewEvents";
import AddEvent from "./components/AddEvent";
import EditEvent from "./components/EditEvent";
export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navigation />
        <Router>
          <Home path="/" />
          <ViewEvents path="/viewevents" />
          <AddEvent path="/addevent" />
          <EditEvent path="/editevent/:event" />
        </Router>
      </React.Fragment>
    );
  }
}
