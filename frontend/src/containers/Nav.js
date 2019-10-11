import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaUserAltSlash } from "react-icons/fa";
import { FiShoppingCart, FiUserCheck, FiUser } from "react-icons/fi";
import "../styling/Nav.css";
import logo from "../sources/StyleBoxNewLogo.png";
import AuthContext from "../contexts/auth";

export default class Nav extends Component {
  state = {
    user: null
  };

  render() {
    const defaultNav = (
      <div class="navbar-fixed">
      <nav className="nav-bar">
        <div className="logo">
          <a href="/" style={{ fontSize: '30px', fontFamily: '' }} >Stylebox</a>
        </div>
        <div>
          {/* <ul className="nav-tags links left">
                              <Link className="links" to="/products"><FaSearch /> Browse Products </Link>
                            </ul>
                            <ul className="nav-tags links right">
                              <Link className="links" to="/login"><FiUser /> Sign In </Link>
                            </ul> */}
        </div>
      </nav>
      </div>
    );

    const userNav = (
      <nav className="nav-bar">
        <div className="logo">
          <a href="/">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <ul className="nav-tags links left">
          <Link className="links" to="/products">
            <FaSearch /> Browse Products{" "}
          </Link>
          <Link className="links" to="/cart">
            <FiShoppingCart /> My Cart{" "}
          </Link>
        </ul>
        <Link className="links" to="/myaccount">
          <FiUserCheck /> My Account{" "}
        </Link>
        <ul className="nav-tags links right">
          <Link className="links" to="/logout">
            <FaUserAltSlash /> Logout
          </Link>
        </ul>
      </nav>
    );

    return (
      <AuthContext.Consumer>
        {user => {
          if (user) return userNav;
          else return defaultNav;
        }}
      </AuthContext.Consumer>
    );
  }
}
