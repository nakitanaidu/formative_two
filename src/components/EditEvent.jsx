import React, { Component } from "react";
import { navigate } from "@reach/router";
import Axios from "axios";

export default class EditEvent extends Component {
  constructor(props) {
    super(props);
    this.state = { artworks: {} };
    // get handle on the DOM element
    this.myRef = React.createRef();
  }

  gotoEvents = e => {
    navigate(`/viewevents`);
  };

  componentDidMount() {
    Axios.get(`http://localhost:3000/artworks/${this.props.event}`).then(
      res => {
        // console.table(res.data);
        this.setState({ artworks: res.data });
      }
    );
  }

  EditEvent = e => {
    e.preventDefault();
    // grab reference to the form data
    var formData = new FormData(this.myRef.current);
    // transfer into temp obj, ready to send
    var dataToSend = {
      name: formData.get("name"),
      imageUrl: formData.get("imageUrl"),
      author: formData.get("author"),
      url: formData.get("url")
    };

    Axios.put(
      `http://localhost:3000/artworks/${this.props.event}`,
      dataToSend
    ).then(res => {
      console.log(res);
    });
  };

  render() {
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
          <label>Url:</label>
          <input type="text" name="url" defaultValue={url} />

          <br />

          <div className="edit-button-wrapper">
            <button type="submit">Update event</button>
          </div>
        </form>
        <br />
        <button className="add-button" onClick={this.gotoEvents}>
          Return to events
        </button>
      </div>
    );
  }
}
