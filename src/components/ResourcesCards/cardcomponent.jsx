import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";

// Define a functional component named CardComponent
const CardComponent = ({ imageUrl, title, subtitle, text, buttonText }) => {
  // Use the state hook to manage the visibility of additional content
  const [showAdditionalContent, setShowAdditionalContent] = useState(false);

  // Define a function to handle button click
  const handleButtonClick = () => {
    // Toggle the value of showAdditionalContent
    setShowAdditionalContent((prev) => !prev);
  };

  // Render the component
  return (
    <Card className="topicCards" style={{ width: "18rem" }}>
      {/* Display the image */}
      <img alt="Sample" src={imageUrl || "https://picsum.photos/300/200"} />

      {/* Card body containing title, subtitle, text, and button */}
      <CardBody>
        <CardTitle tag="h5">{title || "Card title"}</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          {subtitle || "Card subtitle"}
        </CardSubtitle>
        <CardText>
          {text ||
            "Some quick example text to build on the card title and make up the bulk of the card's content."}
        </CardText>

        {/* Button with an onClick event to trigger handleButtonClick */}
        <Button onClick={handleButtonClick}>{buttonText || "Button"}</Button>

        {/* Display additional content conditionally based on showAdditionalContent state */}
        {showAdditionalContent && (
          <div className="mt-2">
            <p>Additional content specific to this card.</p>
            {/* Add more content as needed */}
          </div>
        )}
      </CardBody>
    </Card>
  );
};

export default CardComponent;
