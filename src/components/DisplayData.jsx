import React, { Component } from "react";
import Axios from "axios";
import EditButton from "./EditButton";

export default class DisplayData extends Component {
  removeEvent = evt => {
    // var index = evt.target.getAttribute("data-uuid");
    Axios.delete(`http://localhost:3000/artworks/${this.props.uuid}`).then(
      res => {
        console.log(res.data);

        this.props.refreshEvent();
      }
    );
  };

  render() {
    return (
      <div className="display">
        <p>Name: {this.props.name}</p>
        <div>
          <img src={this.props.imagepath} alt="pics" />
        </div>

        <p>Author: {this.props.author}</p>

        <p>
          <a href={this.props.url} target="_blank" rel="noopener noreferrer">
            View autor's portfolio
          </a>
        </p>

        <div>
          <EditButton event_id={this.props.uuid} />
        </div>

        <button
          className="add-button"
          uuid={this.props.uuid}
          onClick={this.removeEvent}
        >
          Delete
        </button>
      </div>
    );
  }
}
