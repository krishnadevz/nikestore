import React, { Component } from "react";
import Menu from "./svg/bars-solid.svg";
import Close from "./svg/times-solid.svg";
import CartIcon from "./svg/shopping-cart-solid.svg";
import Nike from "./svg/nike.svg";
import SearchBar from "./svg/search.svg";
import Heart from "./svg/heart-svg.svg";
import { Link } from "react-router-dom";
import "./css/Header.css";
export default class Header extends Component {
  state = {
    toggle: false,
  };

  menuToggle = () => {
    this.setState({ toggle: !this.state.toggle });
  };
  render() {
    const { toggle } = this.state;

    return (
      <header>
        <div className="menu" onClick={this.menuToggle}>
          <img src={Menu} alt="" width="20" />
        </div>
        <div className="logo">
          <h1 className="nikelogo">
            <img src={Nike} alt="nikelogo" width="50"  />
          </h1>
          
        </div>
        <nav >
          <ul className={toggle ? "toggle" : ""}>
            <li>
              <Link to="/">New Releases</Link>
            </li>
            <li>
              <Link to="/">Men</Link>
            </li>
            <li>
              <Link to="/">Women</Link>
            </li>
            <li>
              <Link to="/">Kids</Link>
            </li>
            <li>
              <Link to="/">Sale</Link>
            </li>
            <li>
              <Link to="/">Collections</Link>
            </li>
            <li className="close">
              <img src={Close} alt="" width="20" />
            </li>
            
            <img src={SearchBar} className="logos" alt="search" width="50" height="18" />
            <img src={Heart} className="logoe" alt="search" width="50" height="18" />

          </ul>
          {/* <div className="nav-cart">
            <span>0</span>
            <Link to="/cart">
              <img src={CartIcon} alt="" width="20" />
            </Link>
          </div> */}
        </nav>
        <div className="border"></div>
      </header>
      
    );
  }
}
