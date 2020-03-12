import React, { Component } from "react";
<<<<<<< HEAD
import { navigate } from "@reach/router";
import Axios from "axios";
=======
import Axios from "axios";
import { navigate } from "@reach/router";
>>>>>>> 4ea5b1ac5d3233d37c8e0fd15f7214ed1b74cb01

export default class EditEvent extends Component {
  constructor(props) {
    super(props);
<<<<<<< HEAD
    this.state = { artworks: {} };
    // get handle on the DOM element
    this.myRef = React.createRef();
  }

  gotoEvents = e => {
=======

    this.state = { EditEvent: {} };
    this.myRef = React.createRef();
  }

  goEvent = e => {
>>>>>>> 4ea5b1ac5d3233d37c8e0fd15f7214ed1b74cb01
    navigate(`/viewevents`);
  };

  componentDidMount() {
<<<<<<< HEAD
    Axios.get(`http://localhost:3000/artworks/${this.props.event}`).then(
      res => {
        // console.table(res.data);
        this.setState({ artworks: res.data });
      }
    );
=======
    Axios.get(`http://localhost:3000/artworks/${this.props.uid}`).then(res => {
      this.setState({ EditEvent: res.data });
    });
>>>>>>> 4ea5b1ac5d3233d37c8e0fd15f7214ed1b74cb01
  }

  EditEvent = e => {
    e.preventDefault();
<<<<<<< HEAD
    // grab reference to the form data
    var formData = new FormData(this.myRef.current);
    // transfer into temp obj, ready to send
=======

    var formData = new FormData(this.myRef.current);

>>>>>>> 4ea5b1ac5d3233d37c8e0fd15f7214ed1b74cb01
    var dataToSend = {
      name: formData.get("name"),
      imageUrl: formData.get("imageUrl"),
      author: formData.get("author"),
      url: formData.get("url")
    };

    Axios.put(
<<<<<<< HEAD
      `http://localhost:3000/artworks/${this.props.event}`,
=======
      `http://localhost:3000/artworks/${this.props.myid}`,
>>>>>>> 4ea5b1ac5d3233d37c8e0fd15f7214ed1b74cb01
      dataToSend
    ).then(res => {
      console.log(res);
    });
  };

  render() {
<<<<<<< HEAD
    const { name, imageUrl, author, url } = this.state.artworks;

    return (
      <div className="edit-form-wrapper">
        <h1>Edit Event</h1>
        <form
          className="form-wrapper"
          onSubmit={this.EditEvent}
          ref={this.myRef}
        >
          <label htmlFor="name">Event name:</label>
          <input type="text" name="name" defaultValue={name} />

          <br />

          <label>Image url:</label>
          <input type="text" name="imageUrl" defaultValue={imageUrl} />
          <br />
          <label>Author:</label>
          <input type="text" name="author" defaultValue={author} />

          <br />
=======
    var { name, imageUrl, author, url } = this.state.EditEvent;
    return (
      <div>
        <h1>Edit Event:</h1>
        <form onSubmit={this.editPerson} ref={this.myRef}>
          <label>Name:</label>
          <input type="text" name="name" defaultValue={name} />

          <label>Image:</label>
          <input type="text" name="imageUrl" defaultValue={imageUrl} />

          <label>Author:</label>
          <input type="text" name="author" defaultValue={author} />

>>>>>>> 4ea5b1ac5d3233d37c8e0fd15f7214ed1b74cb01
          <label>Url:</label>
          <input type="text" name="url" defaultValue={url} />

          <br />
<<<<<<< HEAD

          <div className="edit-button-wrapper">
            <button type="submit">Update event</button>
          </div>
        </form>
        <br />
        <button className="add-button" onClick={this.gotoEvents}>
          Return to events
        </button>
=======
          <button type="submit" className="add-button">
            Update details
          </button>
        </form>

        <button className="add-button" onClick={this.goEvent}>
          Return Home
        </button>
        <p>{this.props.myid}</p>
>>>>>>> 4ea5b1ac5d3233d37c8e0fd15f7214ed1b74cb01
      </div>
    );
  }
}
