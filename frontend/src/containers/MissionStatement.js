import React from "react";
import "../styling/Fonts.css";

const MissionStatement = () => {
  return (
    <div
      className="section brown lighten-5"
      style={{ minHeight: "60vh", padding: "10%", textAlign: "center" }}
    >
      <div className="row container">
        <div className="col s12 m10 offset-m1">
          <span style={{ fontSize: "25px", fontFamily: 'rubik' }}>
            We’ve spent years talking to women, sharing the nuances of our
            personal care rituals, and developing great products to support
            them. We believe that when we show up for ourselves in private,
            we’re able to show up as ourselves in public
          </span>
        </div>
      </div>
    </div>
  );
};

export default MissionStatement;
