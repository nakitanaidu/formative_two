import React, { Component } from "react";
<<<<<<< HEAD

=======
>>>>>>> 4ea5b1ac5d3233d37c8e0fd15f7214ed1b74cb01
import { navigate } from "@reach/router";
import Axios from "axios";

export default class AddEvent extends Component {
<<<<<<< HEAD
  gotoEvents = e => {
    navigate(`/viewevents`);
  };

  addEvent = e => {
=======
  constructor(props) {
    super(props);

    this.state = { event: {} };
    this.myRef = React.createRef();
  }

  goEvent = e => {
    navigate(`/viewevents`);
  };

  AddEvent = e => {
>>>>>>> 4ea5b1ac5d3233d37c8e0fd15f7214ed1b74cb01
    e.preventDefault();
    var name = e.target.elements["name"].value;
    var imageUrl = e.target.elements["imageUrl"].value;
    var author = e.target.elements["author"].value;
    var url = e.target.elements["url"].value;

<<<<<<< HEAD
    //POST REQUIRES EXTRA PARAMETERS AND THEY NEED TO MATCH WITH MONGODB FORMAT (userModel, UserScheme in users-model.js)
=======
    // POST REQUIRES EXTRA PARAMETERS AND THEY NEED TO MATCH WITH MONGODB FORMAT (userModel, UserScheme in users-model.js)
>>>>>>> 4ea5b1ac5d3233d37c8e0fd15f7214ed1b74cb01

    Axios.post(`http://localhost:3000/artworks`, {
      name: name,
      imageUrl: imageUrl,
      author: author,
      url: url
    }).then(res => {
      console.log(res.data);
<<<<<<< HEAD
      // alert(`EVENT ADDED:" ${name}`);
=======
      alert("Event ADDED:" + name);
>>>>>>> 4ea5b1ac5d3233d37c8e0fd15f7214ed1b74cb01
    });
  };

  render() {
    return (
<<<<<<< HEAD
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
=======
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
        <button className="add-button" onClick={this.goEvent}>
          Return to Event
        </button>
        <p>{this.props.myid}</p>
      </div>
>>>>>>> 4ea5b1ac5d3233d37c8e0fd15f7214ed1b74cb01
    );
  }
}
