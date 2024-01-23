import React from 'react';
import { CarouselCaption } from 'reactstrap';

function NPMSlide() {
  const keyPoints = [
    'What is NPM?',
    'What is Node.js?',
    'Learn the basics of its Dependencies.',
    'How to install and use NPM?',
    'Learn using it with Package.json.',
    'Practice!',
  ];

  return (
    <>
      <img src="https://picsum.photos/id/143/1200/400" alt="NPM Slide" />
      <div className="slide-content">
        <div className="caption-title">
          <h3>Package Managers - NPM</h3>
        </div>
        <div className="npm-key-points">
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

export default NPMSlide;
