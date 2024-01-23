import React from 'react';
import { CarouselCaption } from 'reactstrap';
import './index.css';

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
      <img src="https://picsum.photos/id/41/1200/400" alt="HTML Slide" />
      <div className="slide-content">
        <div className="caption-title">
          <h3>HTML - The HyperText Markup Language</h3>
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

export default HTMLSlide;
