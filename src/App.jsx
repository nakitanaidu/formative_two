import React, { Component } from "react";
import { Router } from "@reach/router";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import ViewEvents from "./components/ViewEvents";
<<<<<<< HEAD
import AddEvent from "./components/AddEvent";
=======
import AddEvents from "./components/AddEvent";
>>>>>>> 4ea5b1ac5d3233d37c8e0fd15f7214ed1b74cb01
import EditEvent from "./components/EditEvent";
export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navigation />
        <Router>
          <Home path="/" />
          <ViewEvents path="/viewevents" />
<<<<<<< HEAD
          <AddEvent path="/addevent" />
          <EditEvent path="/editevent/:event" />
=======
          <AddEvents path="/addevent" />
          <EditEvent path="/edit/:artworkId" />
>>>>>>> 4ea5b1ac5d3233d37c8e0fd15f7214ed1b74cb01
        </Router>
      </React.Fragment>
    );
  }
}
