import React, { Component } from "react";
import Axios from "axios";
import DisplayEvents from "./DisplayEvents";

export default class ViewEvents extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ViewEvents: []
    };
  }

  componentDidMount = e => {
    this.getData();
  };

  getData = e => {
    Axios.get("http://localhost:3000/artworks").then(res => {
      console.table(res.data);
      this.setState({
        ViewEvents: res.data
      });
    });
  };

  render() {
    return (
      <React.Fragment>
        <div>
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
                />
              );
            })}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}
