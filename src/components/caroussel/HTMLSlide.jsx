import React from 'react';
import { CarouselCaption } from 'reactstrap';

function HTMLSlide() {
  const keyPoints = [
    'What is HTML?',
    'What is HTML element?',
    'HTML page structure',
    'Basic HTML elements and tags',
    'Practice',
  ];

  return (
    <>
      <img src="https://picsum.photos/id/456/1200/400" alt="HTML Slide" />
      <CarouselCaption captionText="HTML" captionHeader="HTML" />
      <div className="html-key-points">
        <ul>
          {keyPoints.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default HTMLSlide;
