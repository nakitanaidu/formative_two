import React, { Component } from "react";
import { Link } from "@reach/router";

const menuStyle = {
  display: "flex",
  width: "80vw",
  justifyContent: "space-between",
  alignItems: "center",
  listStyleType: "none"
};

const LinkStyle = { color: "#4caf50" };

export default class Navigation extends Component {
  render() {
    return (
      <nav>
        <ul style={menuStyle}>
          <li>
            <Link style={LinkStyle} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link style={LinkStyle} to="/viewcandidates">
              View Candidates
            </Link>
          </li>
          <li>
            <Link style={LinkStyle} to="/addcandidates">
              Add Candidates
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}
