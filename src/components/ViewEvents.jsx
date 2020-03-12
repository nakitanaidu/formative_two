import React, { Component } from "react";
import Axios from "axios";
<<<<<<< HEAD
import DisplayData from "./DisplayData";
=======
import DisplayEvents from "./DisplayEvents";
>>>>>>> 4ea5b1ac5d3233d37c8e0fd15f7214ed1b74cb01

export default class ViewEvents extends Component {
  constructor(props) {
    super(props);
<<<<<<< HEAD
    this.state = { artworks: [] };
=======

    this.state = {
      ViewEvents: []
    };
>>>>>>> 4ea5b1ac5d3233d37c8e0fd15f7214ed1b74cb01
  }

  componentDidMount = e => {
    this.getData();
  };

  getData = e => {
<<<<<<< HEAD
    Axios.get("http://localhost:3000/artworks/").then(res => {
      console.table(res.data);
      this.setState({
        artworks: res.data
=======
    Axios.get("http://localhost:3000/artworks").then(res => {
      console.table(res.data);
      this.setState({
        ViewEvents: res.data
>>>>>>> 4ea5b1ac5d3233d37c8e0fd15f7214ed1b74cb01
      });
    });
  };

  render() {
    return (
      <React.Fragment>
        <div>
<<<<<<< HEAD
          When you're next wondering what to do and where to go in Auckland,
          there's always so much happening in Auckland’s city centre! Browse
          current and upcoming events, from concerts and gigs to spectacular
          shows and festive experiences.
        </div>

        <div>
          <ul>
            {console.log(this.state.artworks)}
            {this.state.artworks.map((data, i) => {
              return (
                <DisplayData
                  key={i}
                  name={data.name}
                  imagepath={data.imageUrl}
                  author={data.author}
                  url={data.url}
                  uuid={data._id}
                  removeEvent={this.removeEvent}
                  refreshEvent={this.getData}
=======
          <ul>
            {console.log(this.state.ViewEvents)}
            {this.state.ViewEvents.map((event, i) => {
              return (
                <DisplayEvents
                  key={i}
                  name={event.name}
                  imageUrl={event.imageUrl}
                  author={event.author}
                  url={event.url}
                  _id={event._id}
                  refreshevent={this.getData}
                  updatevent={this.updatevent}
                  addevent={this.addevent}
>>>>>>> 4ea5b1ac5d3233d37c8e0fd15f7214ed1b74cb01
                />
              );
            })}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}
