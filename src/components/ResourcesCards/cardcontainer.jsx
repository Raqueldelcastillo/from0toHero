import React from "react";
import CardComponent from "./cardcomponent";

const Cardcontainer = () => {
  const cardData = [
    {
      imageUrl: "../images/html-logo.png",
      title: "HTML",
      subtitle: "Subtitle 1",
      text: "Some text for Card 1.",
      buttonText: "Button 1",
    },
    {
      imageUrl: "./images/html-logo.png",
      title: "Java-Script",
      subtitle: "Subtitle 1",
      text: "Some text for Card 1.",
      buttonText: "Button 1",
    },
    {
      imageUrl: "./images/html-logo.png",
      title: "CSS",
      subtitle: "Subtitle 1",
      text: "Some text for Card 1.",
      buttonText: "Button 1",
    },
    {
      imageUrl: "./images/html-logo.png",
      title: "Internet",
      subtitle: "Subtitle 1",
      text: "Some text for Card 1.",
      buttonText: "Button 1",
    },
    {
      imageUrl: "./images/html-logo.png",
      title: "Git",
      subtitle: "Subtitle 1",
      text: "Some text for Card 1.",
      buttonText: "Button 1",
    },
    {
      imageUrl: "./images/html-logo.png",
      title: "React",
      subtitle: "Subtitle 1",
      text: "Some text for Card 1.",
      buttonText: "Button 1",
    },
  ];

  return (
    <div className="container-fluid">
      {/* Cards Grid */}
      <div className="mt-4">
        <div className="row">
          {cardData.map((card, index) => (
            <div key={index} className="col-md-4 mb-4">
              <CardComponent title={card.title} content={card.text} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cardcontainer;
