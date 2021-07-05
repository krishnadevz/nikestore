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
          <p className="title">Just Landed: The Nike App <Link>Learn more</Link> </p>
        </div>
        <div className="header">
          <p>Sign In</p>
          &ensp;&ensp;
          <p>Join Us</p>
          &ensp;&ensp;
          <p>Help</p>
        </div>
      </headert>
    );
  }
}
