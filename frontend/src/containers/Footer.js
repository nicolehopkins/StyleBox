import React from "react";
import '../styling/Fonts.css';

const Footer = props => {
  return (
    <div
      className="section"
      style={{ minHeight: "40vh", backgroundImage: "url('https://static.vecteezy.com/system/resources/previews/000/100/746/non_2x/vector-abstract-geometric-pattern-background.jpg')"}}
    >
      <div className="row ">
        <a href="/" class="long-cang" style={{ fontSize: "50px" }}>SB</a>
      </div>
    </div>
  );
};

export default Footer;
