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
          {subtitle || "Card subtitle"}
        </CardSubtitle>
        <CardText>{text || "Sample text-- Learning resources -- "}</CardText>

        {/* Button with an onClick event to trigger handleButtonClick */}
        <Button onClick={handleButtonClick}>{buttonText || "Button"}</Button>

        {/* Display learning resources when button clicked*/}
        {showAdditionalContent && (
          <div className="mt-2">
            <p>Additional content specific to this card.</p>
            {/* Can add more content here */}
          </div>
        )}
      </CardBody>
    </Card>
  );
};

export default CardComponent;
