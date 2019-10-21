import React, { Component } from "react";
import AuthContext from "../contexts/auth";

// STYLESHEETS
import "../styling/Nav.css";
import "../styling/Fonts.css";

export default class Nav extends Component {
  state = {
    user: null,
  };

  openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
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
                  <a href="#/login">
                    SIGN IN
                  </a>
                </li>
              </ul>
            </div>
          </nav>
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
                <a
                  href="/"
                  data-target="mobile-demo"
                  className="sidenav-trigger"
                >
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
                    <a href="#/myaccount" className="rubik">
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
