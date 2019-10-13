import React, { Component } from "react";
import AuthContext from "../contexts/auth";

// STYLESHEETS
import "../styling/Nav.css";
import '../styling/Fonts.css';


export default class Nav extends Component {
  state = {
    user: null
  };

  render() {

    // Initial Nav (no user logged in)
    const defaultNav = (
      <div class="navbar-fixed" style={{ margin: '0 !important' }} >
        <nav className='white'>
          <div class="nav-wrapper white">
            <a href="#/" class="brand-logo center long-cang" style={{ fontSize: "60px" }} >
              Stylebox
            </a>
            <a href="/" data-target="mobile-demo" class="sidenav-trigger">
              <i class="material-icons">menu</i>
            </a>
            <ul class="left hide-on-med-and-down">
              <li>
                <a href="#/products" className='rubik'>BROWSE PRODUCTS</a>
              </li>
              <li>
                <a href="#/aboutus" className='rubik'>ABOUT US</a>
              </li>
            </ul>
            <ul class="right hide-on-med-and-down">
              <li>
                <a href="#/login" className='rubik'>SIGN IN</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );

    // Nav for logged in user
    const userNav = (
      <div class="navbar-fixed" style={{ margin: '0 !important'  }}>
      <nav className='white'>
        <div class="nav-wrapper white">
          <a href="/" class="brand-logo center long-cang" style={{ fontSize: "30px" }} >
            Stylebox
          </a>
          <a href="/" data-target="mobile-demo" class="sidenav-trigger">
            <i class="material-icons">menu</i>
          </a>
          <ul class="left hide-on-med-and-down">
            <li>
              <a href="#/products" className='rubik'>BROWSE PRODUCTS</a>
            </li>
            <li>
              <a href="#/aboutus" className='rubik'>ABOUT US</a>
            </li>
          </ul>
          <ul class="right hide-on-med-and-down">
            <li>
              <a href="#/myaccount" className='rubik'>MY ACCOUNT</a>
            </li>
            <li>
              <a href="#/cart">
                <i class="material-icons">shopping_basket<span class="badge teal lighten-4">4</span></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
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
