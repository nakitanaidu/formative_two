import React, { Component } from "react";
import Axios from "axios";
import EditButton from "./EditButton";
import "bootstrap/dist/css/bootstrap.css";

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
      <div className="card mb-3">
        <img src={this.props.imagepath} alt="pics" className="card-img-top" />
        <div className="card-body display">
          <h5 className="card-title">{this.props.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{this.props.author}</h6>
          <p className="card-text"></p>
          <div className="button-container">
            <a href={this.props.url} target="_blank" rel="noopener noreferrer">
              See author portfolio
            </a>

            <div>
              <EditButton event_id={this.props.uuid} />
              <button
                className="add-button btn btn-outline-danger"
                uuid={this.props.uuid}
                onClick={this.removeEvent}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
