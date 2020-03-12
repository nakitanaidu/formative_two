import React, { Component } from "react";
import Axios from "axios";
import { navigate } from "@reach/router";

export default class EditEvent extends Component {
  constructor(props) {
    super(props);

    this.state = { EditEvent: {} };
    this.myRef = React.createRef();
  }

  goHome = e => {
    navigate(`/`);
  };

  componentDidMount() {
    Axios.get(`http://localhost:3000/artworks/${this.props.uid}`).then(res => {
      this.setState({ EditEvent: res.data });
    });
  }

  EditEvent = e => {
    e.preventDefault();

    var formData = new FormData(this.myRef.current);

    var dataToSend = {
      name: formData.get("name"),
      imageUrl: formData.get("imageUrl"),
      author: formData.get("author"),
      url: formData.get("url")
    };

    Axios.put(
      `http://localhost:3000/artworks/${this.props.myid}`,
      dataToSend
    ).then(res => {
      console.log(res);
    });
  };

  render() {
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

          <label>Url:</label>
          <input type="text" name="url" defaultValue={url} />

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
