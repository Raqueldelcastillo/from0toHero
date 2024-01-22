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
      <img src="https://picsum.photos/id/48/1200/400" alt="CSS Slide" />
      <div className="slide-content">
        <div className="caption-title">
          <h3>CSS - Cascading Style Sheet</h3>
        </div>
        <div className="html-key-points">
          <ul>
            {keyPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default CSSSlide;