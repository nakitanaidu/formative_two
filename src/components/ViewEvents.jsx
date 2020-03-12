import React, { Component } from "react";
import Axios from "axios";
import DisplayData from "./DisplayData";

export default class ViewEvents extends Component {
  constructor(props) {
    super(props);
    this.state = { artworks: [] };
  }

  componentDidMount = e => {
    this.getData();
  };

  getData = e => {
    Axios.get("http://localhost:3000/artworks/").then(res => {
      console.table(res.data);
      this.setState({
        artworks: res.data
      });
    });
  };

  render() {
    return (
      <React.Fragment>
        <div>
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
                />
              );
            })}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}
