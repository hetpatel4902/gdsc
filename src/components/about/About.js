import React from "react";
import download from "../data/gdsc.svg";
import gcet from "../data/gcet.png";
import "./about.css";
import gdsc_video from "../data/gdsc_video.mp4";
import HoverVideoPlayer from "react-hover-video-player";

function About() {
  return (
    <div className="about">
      <div className="left_component">
        <div className="detail">
          <div>
            <img
              className="logo"
              src={download}
              alt="gdsc_logo"
              width="40"
              height="40"
            />
          </div>
          <div className="gdsc_sform">
            <text>Google Developer Student Clubs</text>
          </div>
        </div>
        <div className="college_name">
          <text>G.H.Patel College of Engineering</text>
        </div>
        <div className="gdsc_detail">
          <text>
            <strong>Google Developer Student Clubs (GDSC)</strong> is a
            community group for college and university students interested in
            Google developer technologies. By joining a GDSC, students grow
            their knowledge in a peer-to-peer learning environment and build
            solutions for local businesses and their community.
          </text>
        </div>
      </div>
      <div className="right_component">
        <HoverVideoPlayer
          videoSrc={gdsc_video}
          pausedOverlay={
            <img
              src={gcet}
              alt=""
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "10px",
                boxShadow: "-1px 22px 50px -1px rgb(0 0 0 / 0.2)",
              }}
            />
          }
        />
      </div>
    </div>
  );
}

export default About;
