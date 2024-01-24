import React from "react";
import { Button } from "reactstrap";

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
      <h1 className="display-4">Zhero</h1>
      <p className="lead">
        Learn Front-end development de go from Zero to Hero.
      </p>
      {/* <Button variant="primary">Learn More</Button> */}
    </div>
  );
};

export default HeroSection;
