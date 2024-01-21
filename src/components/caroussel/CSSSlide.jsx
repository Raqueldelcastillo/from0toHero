import React from 'react';
import { CarouselCaption } from 'reactstrap';

function CSSSlide() {
  const keyPoints = [
    'What is HTML?',
    'What is HTML element?',
    'HTML page structure',
    'Basic HTML elements and tags',
    'Practice',
  ];

  return (
    <>
      <img src="https://picsum.photos/id/456/1200/400" alt="CSS Slide" />
      <CarouselCaption captionText="CSS" captionHeader="CSS" />
      <div className="css-key-points">
        <ul>
          {keyPoints.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default CSSSlide;
