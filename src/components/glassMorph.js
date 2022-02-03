import React from "react";
import het_image1 from "./data/het_image1.jpeg";
import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";
import darp_image from "./data/darp_image.jpg";

const Container = styled(animated.div)`
  display: inline-block;
  padding: 3em;
  background: #00000020;
  border-radius: 10px;
  z-index: 1;
  position: relative;
  backdrop-filter: blur(10px);
  border: 2px solid transparent;
  background-clip: border-box;
  cursor: pointer;
  height: 280px;
  width: 250px;
  margin: 0px 20px 0px 20px;
`;
// #c7d2fe66
const StyledImg = styled.img`
  width: 200px;
  height: 220px;
  border-radius: 50%;
`;

const StyledH1 = styled.h1`
  letter-spacing: 1.2;
  font-family: "Gilroy";
  font-size: 20px;
`;

const StyledH3 = styled.h3`
  letter-spacing: 1.15;
  font-family: "Gilroy";
  font-size: 16px;
`;

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const GlassCard = (props) => {
  const [prop, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: config.default,
  }));
  return (
    <Container
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{
        transform: prop.xys.interpolate(trans),
      }}
    >
      <StyledImg src={props.img} />
      <div style={{ textAlign: "center" }}>
        <StyledH1>{props.name}</StyledH1>
      </div>
      <div style={{ textAlign: "center" }}>
        <StyledH3>{props.desc}</StyledH3>
      </div>
    </Container>
  );
};

export default GlassCard;
