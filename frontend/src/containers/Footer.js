import React from "react";
import "../styling/Footer.css";

const Footer = props => {
  return (
    <div
      className="section"
      style={{
        minHeight: "60vh",
        backgroundImage:
          "url('https://www.freevector.com/uploads/vector/preview/16497/FreeVector-Floral-Background-Pattern-1.jpg')"
      }}
    >
      <div className="row container">
        <div className="col s12 m10 offset-m1">
          <h2>Footer Section</h2>
          <p>
            This will be the Footer where we tell you about our company and you can subscribe.
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
  );
};

export default Footer;
