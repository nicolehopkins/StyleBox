import React, { Component } from "react";
import Materialize from "materialize-css";
import "../styling/Home.css";
// import logo from "../sources/StyleBoxNewLogo.png";

export default class Home extends Component {
  componentDidMount() {
    // Scroll to top of page upon loading
    window.scrollTo(0, 0);

    // Paralax Initialization
    let elems = document.querySelectorAll(".parallax");
    Materialize.Parallax.init(elems, { responsiveThreshold: "0" });
  }

  render() {
    return (
      <>
        <div className="parallax-container">
          <div className="parallax">
            <img
              src="https://images.unsplash.com/photo-1548123378-bde4eca81d2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
              alt="clothing"
            />
          </div>
        </div>
        <div className="section white">
          <div className="row container">
            <div className="col s12 m10 offset-m1">
              <h2>About Us Section</h2>
              <p>
                This will be the about us section where we tell more about
                Stylebox and what we have to offer.
              </p>
              <p>Blah blah blah blah blah blah</p>
              <p>Blah blah blah blah blah blah</p>
              <p>Blah blah blah blah blah blah</p>
              <p>Blah blah blah blah blah blah</p>
              <p>Blah blah blah blah blah blah</p>
              <p>Blah blah blah blah blah blah</p>
            </div>
          </div>
        </div>
        <div className="parallax-container">
          <div className="parallax">
            <img
              src="https://images.unsplash.com/photo-1505262890012-029291d6f9e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
              alt="clothing"
            />
          </div>
        </div>
        <div className="section white">
          <div className="row container">
            <div className="col s12 m10 offset-m1">
              <h2>Footer Section</h2>
              <p>
                This will be the footer section where we tell more about our
                company. Potential customers will be able to sign up, and others
                can subscribe to our product page
              </p>
              <p>Blah blah blah blah blah blah</p>
              <p>Blah blah blah blah blah blah</p>
              <p>Blah blah blah blah blah blah</p>
              <p>Blah blah blah blah blah blah</p>
              <p>Blah blah blah blah blah blah</p>
              <p>Blah blah blah blah blah blah</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
