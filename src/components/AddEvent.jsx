import React, { Component } from "react";
import { navigate } from "@reach/router";
import Axios from "axios";
import "bootstrap/dist/css/bootstrap.css";

export default class AddEvent extends Component {
  gotoEvents = e => {
    navigate(`/viewevents`);
  };

  addEvent = e => {
    e.preventDefault();
    var name = e.target.elements["name"].value;
    var imageUrl = e.target.elements["imageUrl"].value;
    var author = e.target.elements["author"].value;
    var url = e.target.elements["url"].value;

    //POST REQUIRES EXTRA PARAMETERS AND THEY NEED TO MATCH WITH MONGODB FORMAT (userModel, UserScheme in users-model.js)

    Axios.post(`http://localhost:3000/artworks`, {
      name: name,
      imageUrl: imageUrl,
      author: author,
      url: url
    }).then(res => {
      console.log(res.data);
      // alert(`EVENT ADDED:" ${name}`);
    });
  };

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.addEvent} className="add-event-container">
          <div className="form-group">
            <label htmlFor="name">Event name:</label>
            <input
              className="form-control"
              type="text"
              id="name"
              name="name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="imageUrl">Event imageUrl :</label>
            <input
              className="form-control"
              type="text"
              id="imageUrl"
              name="imageUrl"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="author">Author:</label>
            <input
              className="form-control"
              type="text"
              id="author"
              name="author"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="url">Url:</label>
            <input
              className="form-control"
              type="text"
              id="url"
              name="url"
              required
            />
          </div>

          <br />

          <div className="button-wrapper">
            <button
              type="button"
              className="add-button btn btn-outline-secondary"
              onClick={this.gotoEvents}
            >
              Back to the list
            </button>
            <button type="submit" className="add-button btn btn-primary">
              Add Event{" "}
            </button>
          </div>
        </form>
      </React.Fragment>
    );
  }
}
