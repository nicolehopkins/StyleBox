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
      <>
      <main>
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
                <button className='rubik white'>SIGN IN</button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      </main>
      {/* SIGN IN SLIDING NAV */}
      <div class="cd-panel cd-panel--from-right js-cd-panel-main">
      <header class="cd-panel__header">
        <h1>Sign In</h1>
        <a href="#0" class="cd-panel__close js-cd-close">
          Close
        </a>
      </header>
      <div class="cd-panel__container">
        <div class="cd-panel__content">
          {/* <!-- your side panel content here --> */}
          <span>Log in, silly</span>
        </div>
        {/* <!-- cd-panel__content --> */}
        <span>Hey</span>
      </div>
      {/* <!-- cd-panel__container --> */}
    </div>
    </>
    );

    // Nav for logged in user
    const userNav = (
      <>
      <main>
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
              <button href="#/myaccount" className='rubik'>MY ACCOUNT</button>
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
    </main>
    {/* SIGN IN SLIDING NAV */}
    <div class="cd-panel cd-panel--from-right js-cd-panel-main">
          <header class="cd-panel__header">
            <h1>Sign In</h1>
            <a href="#0" class="cd-panel__close js-cd-close">
              Close
            </a>
          </header>
          <div class="cd-panel__container">
            <div class="cd-panel__content">
              {/* <!-- your side panel content here --> */}
              <span>Log in, silly</span>
            </div>
            {/* <!-- cd-panel__content --> */}
            <span>Hey</span>
          </div>
          {/* <!-- cd-panel__container --> */}
        </div>
        {/* <!-- cd-panel --> */}
    </>
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
