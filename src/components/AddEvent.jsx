import React, { Component } from "react";
import { navigate } from "@reach/router";
import Axios from "axios";

export default class AddEvent extends Component {
  constructor(props) {
    super(props);

    this.state = { event: {} };
    this.myRef = React.createRef();
  }

  goHome = e => {
    navigate(`/`);
  };

  AddEvent = e => {
    e.preventDefault();
    var name = e.target.elements["name"].value;
    var imageUrl = e.target.elements["imageUrl"].value;
    var author = e.target.elements["author"].value;
    var url = e.target.elements["url"].value;

    // POST REQUIRES EXTRA PARAMETERS AND THEY NEED TO MATCH WITH MONGODB FORMAT (userModel, UserScheme in users-model.js)

    Axios.post(`http://localhost:3000/artworks`, {
      name: name,
      imageUrl: imageUrl,
      author: author,
      url: url
    }).then(res => {
      console.log(res.data);
      alert("Event ADDED:" + name);
    });
  };

  render() {
    return (
      <div className="add-form-wrapper">
        <h1>Add Event</h1>
        <form className="special" onSubmit={this.AddEvent} ref={this.myRef}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="imageUrl">Image:</label>
          <input type="text" id="imageUrl" name="imageUrl" required />

          <label htmlFor="age">Author:</label>
          <input type="text" id="author" name="author" required />

          <label htmlFor="url">Job:</label>
          <input type="text" id="url" name="url" required />

          <br />
          <button type="submit" className="add-button">
            Update details
          </button>
        </form>
        <button className="add-button" onClick={this.goHome}>
          Return Home
        </button>
        <p>{this.props.myid}</p>
      </div>
    );
  }
}
