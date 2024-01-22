import React from 'react';
import { CarouselCaption } from 'reactstrap';

function JavascriptSlide() {
  const keyPoints = [
    'What is Javascript?',
    'Understand the structure of Javascript.',
    'Learn basics of Variables, Functions, Arrays and Objects.',
    'Learn basics of Data structures.',
    'Learn basics of DOM manipulation.',
    'Learn basics of JSON.',
    'Learn basics of Web API',
    'Learn basics of how to use NPM with Javascript',
    'Practice!',
  ];

  return (
    <>
      <img src="https://picsum.photos/id/120/1200/400" alt="Javascript Slide" />
      <div className="slide-content">
        <div className="caption-title">
          <h3>JavaScript</h3>
        </div>
        <div className="javascript-key-points">
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

export default JavascriptSlide;
