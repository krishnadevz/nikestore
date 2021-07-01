import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./css/Headert.css";
export default class Headert extends Component {
  state = {
    toggle: false,
  };

  menuToggle = () => {
    this.setState({ toggle: !this.state.toggle });
  };
  render() {
    const { toggle } = this.state;

    return (
      <headert>
        <div>
          <h4 className="title">Just Landed: The Nike App</h4>
        </div>
        <div className="header">
          <h4>Sign In</h4>
          <h4>Join Us</h4>
          <h4>Help</h4>
        </div>
      </headert>
    );
  }
}
