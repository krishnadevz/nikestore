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
          <h4 className="title">Just Landed: The Nike App <Link>Learn more</Link> </h4>
        </div>
        <div className="header">
          <p>Sign In</p>

          <p>Join Us</p>
          
          <p>Help</p>
        </div>
      </headert>
    );
  }
}
