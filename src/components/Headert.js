import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./css/Headert.css"
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
         
         <nav><ul>
            <li>
              <Link to="/">Sign In</Link>
            </li>
            <li>
              <Link to="/">Join Us</Link>
            </li>
            <li>
              <Link to="/">Help</Link>
            </li>
            </ul></nav> 
      </div>
      </headert>
    );
  }
}
