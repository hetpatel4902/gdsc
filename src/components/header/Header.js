import React from "react";
import download from "../data/gdsc.svg";
import "./header.css";

function Header() {
  return (
    <div className="header">
      <div className="d_home">
        <button className="home">Home</button>
      </div>
      <div className="d_team">
        <button className="team">Team</button>
      </div>
      <div className="logo_d">
        <img
          className="logo_h"
          src={download}
          alt="gdsc_logo"
          width="50"
          height="50"
        />
      </div>
      <div className="d_events">
        <button className="events">Events</button>
      </div>
      <div className="d_discord">
        <button className="discord">Discord</button>
      </div>
    </div>
  );
}

export default Header;
