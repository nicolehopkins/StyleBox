import React, { Component } from "react";
import AuthContext from "../contexts/auth";

// STYLESHEETS
import "../styling/Nav.css";
import "../styling/Fonts.css";

export default class Nav extends Component {
  state = {
    user: null,
    slider: 'offScreen'
  };

  slideOut = (e) => {
    const { slider } = this.state;
    if (slider === 'offScreen') {
      console.log(slider)
      this.setState({slider: 'onScreen'})
    }
    console.log(slider)
    this.setState({slider: 'offScreen'})
  }

  render() {
    // Initial Nav (no user logged in)
    const defaultNav = (
      <>
        <div className="navbar-fixed outer" style={{ margin: "0 !important" }}>
          <nav className="white">
            <div className="nav-wrapper white">
              <a
                href="#/"
                className="brand-logo center long-cang"
                style={{ fontSize: "60px" }}
              >
                Stylebox
              </a>
              <a href="/" data-target="mobile-demo" className="sidenav-trigger">
                <i className="material-icons">menu</i>
              </a>
              <ul className="left hide-on-med-and-down">
                <li>
                  <a href="#/products" className="rubik">
                    BROWSE PRODUCTS
                  </a>
                </li>
                <li>
                  <a href="#/aboutus" className="rubik">
                    ABOUT US
                  </a>
                </li>
              </ul>
              <ul className="right hide-on-med-and-down">
                <li>
                  <a href="#" onClick={this.slideOut}>
                    SIGN IN
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          {/* SIGN IN SLIDING NAV */}
          <div className={this.slider}>
            <h1>Sign In</h1>
            <a href="#0" className="cd-panel__close js-cd-close">
              Close
            </a>
            <div className="cd-panel__container">
              <span>Come on, son!</span>
            </div>
          </div>
        </div>
      </>
    );

    // Nav for logged in user
    const userNav = (
      <>
        <main>
          <div className="navbar-fixed" style={{ margin: "0 !important" }}>
            <nav className="white">
              <div className="nav-wrapper white">
                <a
                  href="/"
                  className="brand-logo center long-cang"
                  style={{ fontSize: "30px" }}
                >
                  Stylebox
                </a>
                <a href="/" data-target="mobile-demo" className="sidenav-trigger">
                  <i className="material-icons">menu</i>
                </a>
                <ul className="left hide-on-med-and-down">
                  <li>
                    <a href="#/products" className="rubik">
                      BROWSE PRODUCTS
                    </a>
                  </li>
                  <li>
                    <a href="#/aboutus" className="rubik">
                      ABOUT US
                    </a>
                  </li>
                </ul>
                <ul className="right hide-on-med-and-down">
                  <li>
                    <a href="#" className="rubik">
                      MY ACCOUNT
                    </a>
                  </li>
                  <li>
                    <a href="#/cart">
                      <i className="material-icons">
                        shopping_basket
                        <span class="badge teal lighten-4">4</span>
                      </i>
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </main>
        {/* SIGN IN SLIDING NAV */}
        <div className="cd-panel cd-panel--from-right js-cd-panel-main">
          <header className="cd-panel__header">
            <h1>Sign In</h1>
            <a href="#0" className="cd-panel__close js-cd-close">
              Close
            </a>
          </header>
          <div className="cd-panel__container">
            <div className="cd-panel__content">
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
