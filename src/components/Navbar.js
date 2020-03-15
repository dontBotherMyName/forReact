import React, { Component } from "react";
import { Link } from "react-router-dom";
import MY_COMPANY_LOGO from "../MY_COMPANY_LOGO.svg";
import "./Navbar.css";

export default class Navbar extends Component {
  render() {
    const style_of_navbar = {
      backgroundColor: "#ffff1a"
    };
    const style_of_button = {
      backgroundColor: "#00004d"
    };
    return (
      <nav
        className="navbar navbar-light navbar-expand-sm px-sm-5 "
        style={style_of_navbar}
      >
        {/* https://cdn2.iconfinder.com/data/icons/phone-35/100/device-phone-512.png */}
        <Link to="/">
          <img
            src={MY_COMPANY_LOGO}
            alt="store"
            className="navbar-brand"
            height="120"
            width="120"
          />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              <h2 className="font-weight-bold">MoZONE</h2>
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <button className="buttonContainer" style={style_of_button}>
            <i class="fas fa-shopping-cart" />
            My Cart
          </button>
        </Link>
      </nav>
    );
  }
}
