import React, { Component } from "react";
import { navigate } from "@reach/router";

export default class Home extends Component {
  // constructor(props) {
  //     super(props);
  //     this.state = {};
  //   }

  gotoEvents = e => {
    navigate(`/viewevents`);
  };

  render() {
    return (
      <div className="card mb-3">
        <img
          src="https://images.unsplash.com/photo-1533199250065-2594f352d653?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
          className="card-img-top"
          alt="auckland"
        />
        <div className="card-body">
          <h5 className="card-title">TOP 50 EXPERIENCES IN THE CITY</h5>
          <p className="card-text">
            From major festivals to quirky pop-ups, Broadway shows,
            international art exhibitions, retail openings and city
            transformation milestones, the city centre's calendar is bursting
            with unmissable events and things to do that you won't find anywhere
            else in Auckland. Don't let the road cones stop you from missing out
            on the incredible experiences to have with your partner, friends and
            families - we've listed the top 50 things going on here over March,
            April and May. We've also got the details on the best parking and
            transport options too. We'll see you in here!
          </p>
          <button className="btn btn-primary btn-sm" onClick={this.gotoEvents}>
            Explore here
          </button>
        </div>
      </div>
    );
  }
}
