import React, { Component } from "react";
import { Link } from "@reach/router";
import "bootstrap/dist/css/bootstrap.css";

export default class Navigation extends Component {
  render() {
    return (
      <nav className="nav-container ">
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/viewevents" className="nav-link">
              View Events
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/addevent" className="nav-link">
              Add Event
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}
