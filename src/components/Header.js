import React, { Component } from "react";
import Menu from "./svg/bars-solid.svg";
import Close from "./svg/times-solid.svg";
import CartIcon from "./svg/shopping-cart-solid.svg";
import { Link } from "react-router-dom";
import './css/Header.css';
export default class Header extends Component {

    state = {
        toggle: false
    }

    menuToggle = () =>{
        this.setState({toggle: !this.state.toggle})
    }
  render() {
    const {toggle}=this.state;
    return (
      <header>
        <div>
          <img src={Menu} alt="" width="20" />
        </div>
        <div className="logo">
          <h1>
            <Link to="/">Nike</Link>
          </h1>
        </div>
        <nav>
          <ul className={toggle ? "toggle":""} >
            <li>Home</li>
            <li>New Releases</li>
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
            <li>Sale</li>
            <li>Collections</li>
            <li className="close">
              <img src={Close} alt="" width="20" />
            </li>
          </ul>
          <div className="nav-cart">
            <span>0</span>
            <Link to= "/cart">
            <img src={CartIcon} alt="" width="20" />
</Link>
          </div>
        </nav>
      </header>
    );
  }
}
