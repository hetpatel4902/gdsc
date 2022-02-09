import React from "react";
import "../team/team.css";
import GlassCard from "../teamComponent/glassMorph";
import het_image1 from "../data/het_image1.jpeg";
import darp_image from "../data/darp_image.jpg";
import krishnan from "../data/krishnan.jpg";
import nisarg from "../data/nisarg.jpg";
import aneri from "../data/aneri.jpg";
import download from "../data/gdsc.svg";

function Team() {
  const Het = {
    img: { het_image1 },
    name: "Het Patel",
    desc: "Full stack developer",
    mailId: "mailto:hetpatel5542@gmail.com",
  };
  const Darp = {
    img: { darp_image },
    name: "Darp Dhameliya",
    desc: "GDSC Lead",
  };
  const Krishnan = {
    img: { krishnan },
    name: "Krishnan Navadiya",
    desc: "Member",
  };
  const Nisarg = {
    img: { nisarg },
    name: "Nisarg Vadodariya",
    desc: "Graphic designer",
  };
  const Aneri = {
    img: { aneri },
    name: "Aneri",
    desc: "Doc. and Public Relation",
  };

  return (
    <div className="team1">
      <div
        className="detail2"
        style={{
          justifyContent: "center",
          alignContent: "center",
          marginBottom: 20,
        }}
      >
        <div>
          <img
            className="logo"
            src={download}
            alt="gdsc_logo"
            width="40"
            height="40"
          />
        </div>
        <div className="gdsc_sform2">
          <text>Google Developer Student Club Team</text>
        </div>
      </div>
      <div
        style={{
          flexDirection: "row",
          display: "flex",
          justifyContent: "space-evenly",
          marginBottom: 40,
        }}
      >
        <GlassCard
          image={Het.img.het_image1}
          name={Het.name}
          description={Het.desc}
          mailId={Het.mailId}
        />
        <GlassCard
          image={Darp.img.darp_image}
          name={Darp.name}
          description={Darp.desc}
        />
        <GlassCard
          image={Nisarg.img.nisarg}
          name={Nisarg.name}
          description={Nisarg.desc}
        />
      </div>
      <div
        style={{
          flexDirection: "row",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <GlassCard
          image={Krishnan.img.krishnan}
          name={Krishnan.name}
          description={Krishnan.desc}
        />
        <GlassCard
          image={Aneri.img.aneri}
          name={Aneri.name}
          description={Aneri.desc}
        />
      </div>
    </div>
  );
}

export default Team;
