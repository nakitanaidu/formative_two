import React, { Component } from "react";
import { navigate } from "@reach/router";
import Axios from "axios";

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
        <div className="form-wrapper">
          <form onSubmit={this.addEvent}>
            <label htmlFor="name">Event name:</label>
            <input type="text" id="name" name="name" required />
            <label htmlFor="imageUrl">Event imageUrl :</label>
            <input type="text" id="imageUrl" name="imageUrl" required />
            <label htmlFor="author">Author:</label>
            <input type="text" id="author" name="author" required />

            <label htmlFor="url">Url:</label>
            <input type="text" id="url" name="url" required />
            <br />

            <div className="add-button-wrapper">
              <button type="submit" className="add-button">
                Add Event{" "}
              </button>
              <button
                type="button"
                className="add-button"
                onClick={this.gotoEvents}
              >
                Back to the list
              </button>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}
