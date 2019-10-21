import React, { Component } from "react";
import Materialize from "materialize-css";
import "../styling/Home.css";

// COMPONENTS
import HowItWorks from "./HowItWorks";
import MissionStatement from "./MissionStatement";
import Footer from "./Footer";

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
              src="https://images.unsplash.com/photo-1505262890012-029291d6f9e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80
              "
              alt="clothing"
            />
          </div>
        </div>
        <MissionStatement />
        <div className="parallax-container">
          <div className="parallax">
            <img
              src="https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80
              "
              alt="clothing"
            />
          </div>
        </div>
        <HowItWorks />
        <div className="parallax-container">
          <div className="parallax">
            <img
              src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80
              "
              alt="clothing"
            />
          </div>
        </div>
      </>
    );
  }
}
