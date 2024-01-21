import React from 'react';
import { CarouselCaption } from 'reactstrap';

function NPMSlide() {
  const keyPoints = [
    'What is NPM?',
    'What is Node.js?',
    'Learn the basics of its dependencies.',
    'How to install and use NPM?',
    'Learn using it with Package.json.',
  ];

  return (
    <>
      <img src="https://picsum.photos/id/456/1200/400" alt="NPM Slide" />
      <CarouselCaption captionText="NPM" captionHeader="NPM" />
      <div className="npm-key-points">
        <ul>
          {keyPoints.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default NPMSlide;
