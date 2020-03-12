import React, { Component } from "react";
import { navigate } from "@reach/router";

export default class EditEvent extends Component {
  updateEvent = evt => {
    let temp = this.props.event_id;
    console.log(this.props.event_id);

    //Ee navigate to page
    navigate(`editevent/${temp}`, { state: { uid: temp } });
    //navigate('edit/' + temp, { state: { uid: temp } });
  };

  render() {
    return (
      <button
        className="add-button"
        data-uuid={this.props.event_id}
        onClick={this.updateEvent}
      >
        Edit
      </button>
    );
  }
}
