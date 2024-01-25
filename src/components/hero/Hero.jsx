import React from "react";
import { Button } from "reactstrap";
import Heroimage from "./heroimage";
import { Container } from "@mui/material";
import "./hero.css";
const HeroSection = () => {
  return (
    <div className="hero-container">
      <Container>
        <Heroimage />
      </Container>
      {/* <Button variant="primary">Learn More</Button> */}
    </div>
  );
};

export default HeroSection;
