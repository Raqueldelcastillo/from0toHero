import React from 'react';
import { CarouselCaption } from 'reactstrap';
import './index.css';


function InternetSlide() {
  const keyPoints = [
    'How does Internet work?',
    'How do websites work?',
    'How to get help when you are stuck?',
  ];

  return (
    <>
      <img src="https://picsum.photos/id/24/1200/400" alt="Internet Slide" />
      <div className="slide-content">
        <div className="caption-title">
          <h3>Internet</h3>
        </div>
        <div className="internet-key-points">
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


export default InternetSlide;