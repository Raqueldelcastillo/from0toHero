import React from "react";
import { Button } from "reactstrap";
import Heroimage from "./heroimage";
import { Container } from "@mui/material";
const HeroSection = () => {
  return (
    // <div class="jumbotron jumbotron-fluid">
    //   <div class="container">
    //     <h1 class="display-4">Fluid jumbotron</h1>
    //     <p class="lead">
    //       This is a modified jumbotron that occupies the entire horizontal space
    //       of its parent.
    //     </p>
    //   </div>
    // </div>
    <div>
      <Container>
        <Heroimage />
      </Container>
      {/* <Button variant="primary">Learn More</Button> */}
    </div>
  );
};

export default HeroSection;
