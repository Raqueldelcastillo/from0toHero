import React from 'react';
import { CarouselCaption } from 'reactstrap';

function CSSSlide() {
  const keyPoints = [
    'What is CSS and what it is used for?',
    'Understand the basics.',
    'Learn layout techniques.',
    'Explore CSS properties.',
    'Understand specificity and inheritance.',
    'Practice responsivness.'
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
