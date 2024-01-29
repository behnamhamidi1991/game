import React from "react";
import "./competition.scss";

const Competition = () => {
  return (
    <div className="competition">
      <div className="header">
        <h2>Competitions</h2>
        <p>Here is the hottest competition going on right now</p>
      </div>

      <div className="competition-container">
        <div className="left"></div>
        <div className="right"></div>
      </div>
    </div>
  );
};

export default Competition;
