import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";

const CardComponent = ({ imageUrl, title, subtitle, text, buttonText }) => {
  const [showAdditionalContent, setShowAdditionalContent] = useState(false);

  // button click
  const handleButtonClick = () => {
    setShowAdditionalContent((prev) => !prev);
  };

  return (
    <Card className="topicCards" style={{ width: "18rem" }}>
      {/*  image */}
      <img alt="Sample" src={imageUrl || "https://picsum.photos/300/200"} />

      {/* Card body */}
      <CardBody>
        <CardTitle tag="h5">{title || "Card title"}</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          {subtitle || "Learning resources"}
        </CardSubtitle>
        <CardText>{text || ""}</CardText>

        {/* Button with an onClick event to trigger handleButtonClick */}
        <Button onClick={handleButtonClick} color="success">
          {buttonText || "Button"}
        </Button>

        {/* Display learning resources when button clicked*/}
        {showAdditionalContent && (
          <div className="mt-2">
            <p>Coming soon.</p>
            {/* Can add more content here */}
          </div>
        )}
      </CardBody>
    </Card>
  );
};

export default CardComponent;
