import React from 'react';
import { CarouselCaption } from 'reactstrap';

function JavascriptSlide() {
  const keyPoints = [
    'What is Javascript?',
    'Understand the structure of Javascript.',
    'Learn basics of variables, functions, arrays and objects.',
    'Learn basics of Data structures.',
    'Learn basics of DOM manipulation.',
    'Learn basics of JSON.',
    'Learn basics of Web API',
    'Learn basics of how to use NPM with Javascript',
  ];

  return (
    <>
      <img src="https://picsum.photos/id/456/1200/400" alt="Javascript Slide" />
      <CarouselCaption captionText="Javascript" captionHeader="Javascript" />
      <div className="javascript-key-points">
        <ul>
          {keyPoints.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default JavascriptSlide;
