import React, { Component } from "react";
import AuthContext from "../contexts/auth";
import Materialize from "materialize-css";
import Login from '../components/Login';

// STYLESHEETS
import "../styling/Nav.css";
import "../styling/Fonts.css";

export default class Nav extends Component {
  state = {
    user: null
  };

  componentDidMount() {
    // sliding sign in form
      document
        .getElementById("login-slide")
        .addEventListener("click", function() {
          let elems = document.querySelectorAll(".sidenav");
          console.log("clicked, mf!");
          Materialize.Sidenav.init(elems, { edge: "right" });
        });
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
                StyleBox
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
                <li id="login-slide" onClick={this.handleLogInClick}
                href="/#" data-target="slide-out" className="sidenav-trigger">
                  <a href="#">SIGN IN</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <ul id="slide-out" className="sidenav">
          <li>
            <div className="user-view">

              {/* May put an icon here */}
              {/* <a href="#user">
                <img
                  className="circle"
                  src="https://materializecss.com/images/yuna.jpg"
                  alt="user"
                />
              </a> */}

          <Login />
            </div>
          </li>
        </ul>
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
                href="#/"
                className="brand-logo center long-cang"
                style={{ fontSize: "60px" }}
              >
                StyleBox
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
                  <a href="#/logout" className="rubik">
                      LOG OUT
                    </a>
                    {/* <a href="#/cart">
                      <i className="material-icons">
                        shopping_basket
                        <span class="badge teal lighten-4">4</span>
                      </i>
                    </a> */}
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
