import React, { Component } from "react";
import Axios from "axios";
import { navigate } from "@reach/router";

export default class DisplayEvent extends Component {
  removeEvent = e => {
    Axios.delete(`http://localhost:3000/artworks/${this.props._id}`).then(
      res => {
        console.log(res.data);
        if (res.data.result === true) {
          this.props.refreshEvent();
        }
      }
    );
  };

  updatePerson = evt => {
    let temp = this.props._id;
    console.log(this.props._id);
    navigate(`edit/${temp}`, { state: { uid: temp } });
  };

  render() {
    return (
      <div>
        <p>{this.props.name}</p>

        <img src={this.props.imageUrl} alt="" />

        <p>{this.props.author}</p>

        <a href={this.props.url} target="_blank" rel="noopener noreferrer">
          Link
        </a>
        <br/>
        <button
          className="add-button"
          data-uuid={this.props.uuid}
          onClick={this.updatePerson}
        >
          Edit
        </button>

        <div>
          <button data-uuid={this.props.uuid} onClick={this.removeEvent}>
            Delete
          </button>
        </div>
      </div>
    );
  }
}
