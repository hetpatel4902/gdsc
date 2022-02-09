import React, { Button, Linking } from "react";
import het_image1 from "../data/het_image1.jpeg";
import "../teamComponent/glassmorph.css";
import { RiFacebookFill } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { ImLinkedin2 } from "react-icons/im";
import { SiGmail } from "react-icons/si";
import { CgMail } from "react-icons/cg";
import { Link } from "react-router-dom";

function glassMorph(props) {
  return (
    <div style={{}} className="box">
      <div style={{}}>
        <img
          src={props.image}
          alt="image"
          height={200}
          width="98%"
          style={{ borderRadius: 10 }}
          className="image"
        />
      </div>
      <div className="name">
        <p style={{ alignSelf: "center", margin: 0 }}>{props.name}</p>
      </div>
      <div className="content">
        <p>{props.description}</p>
      </div>
      <div className="symbols">
        <Link
          to="#"
          onClick={(e) => {
            window.location = props.mailId;
            e.preventDefault();
          }}
        >
          <div className="instagram1">
            <CgMail color="white" size="18" />
          </div>
        </Link>

        <div className="facebook1">
          <RiFacebookFill color="white" size="16" />
        </div>
        <div className="whatsapp1">
          <BsWhatsapp color="white" size="16" />
        </div>
        <div className="linkedin1">
          <ImLinkedin2 color="white" size="16" />
        </div>
      </div>
    </div>
  );
}

export default glassMorph;
