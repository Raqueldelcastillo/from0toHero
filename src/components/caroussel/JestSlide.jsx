import React from 'react';
import { CarouselCaption } from 'reactstrap';

function JestSlide() {
  const keyPoints = [
    'Understand the importance of testing.',
    'What is Jest?',
    'Install and set up Jest.',
    'Learn the basics of testing functions.',
    'Learn the basics of how to debug the failed test.',
    'Practice!',
  ];

  return (
    <>
      <img src="https://picsum.photos/id/456/1200/400" alt="Jest Slide" />
      <CarouselCaption captionText="Jest" captionHeader="Jest" />
      <div className="jest-key-points">
        <ul>
          {keyPoints.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default JestSlide;
