import React from "react";
import "../styling/Fonts.css";

const MissionStatement = () => {
  return (
    <div
      className="section brown lighten-5"
      style={{ minHeight: "30vh", padding: "6%", textAlign: "center" }}
    >
      <div className="row container">
        <div className="col">
          <span style={{ fontSize: "25px", fontFamily: 'rubik' }}>
            Our goal is to curate your shopping experience by providing you with
            the latest styles to choose from. We seek out what's hot in the streets
            and have it shipped to your door. Show us your personal style and 
            let us do the rest!
          </span>
        </div>
      </div>
    </div>
  );
};

export default MissionStatement;
