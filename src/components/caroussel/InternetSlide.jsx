import React from 'react';
import { CarouselCaption } from 'reactstrap';

function InternetSlide() {
  const keyPoints = [
    'How does Internet work?',
    'How do websites work?',
    'How to get help when you are stuck?',
  ];

  return (
    <>
      <img src="https://picsum.photos/id/456/1200/400" alt="Internet Slide" />
      <CarouselCaption captionText="Internet" captionHeader="Internet" />
      <div className="internet-key-points">
        <ul>
          {keyPoints.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default InternetSlide;
