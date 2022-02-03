import React from "react";
import "../aboutUs/aboutUs.css";
import gdsc from "../data/gdsc.svg";
import GlassCard from "../glassMorph";
import het_image1 from "../data/het_image1.jpeg";
import darp_image from "../data/darp_image.jpg";

function AboutUs() {
  const Het = {
    img: { het_image1 },
    name: "Het Patel",
    desc: "Front-end Developer",
  };
  const Darp = {
    img: { darp_image },
    name: "Darp Dhamecha",
    desc: "Front-end Developer",
  };
  return (
    <div className="aboutUs">
      <div
        style={{
          width: "95%",
          height: "100%",
          backgroundImage: `url(${gdsc})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          objectFit: "contain",
          padding: "20px",
          margin: "20px",
          borderRadius: "20px",
          overflow: "auto",
          backgroundColor: "black",
          //   whiteSpace: "nowrap",
        }}
      >
        <GlassCard img={Het.img.het_image1} name={Het.name} desc={Het.desc} />
        <GlassCard
          img={Darp.img.darp_image}
          name={Darp.name}
          desc={Darp.desc}
        />
        <GlassCard img={Het.img.het_image1} name={Het.name} desc={Het.desc} />
      </div>
    </div>
  );
}

export default AboutUs;
