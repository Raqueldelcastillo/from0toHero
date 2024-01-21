import React from 'react';
import { CarouselCaption } from 'reactstrap';

function ReactSlide() {
  const keyPoints = [
    'Why use Frameworks?',
    'What is React?',
    'Learn the basics of JSX and Virtual DOM.',
    'Learn the basics and how to use Components, Props, State, Hooks.',
    'Learn the basics and how to use React Router.',
    'API calls.',
    'Practice!',
  ];

  return (
    <>
      <img src="https://picsum.photos/id/379/1200/400" alt="React Slide" />
      <CarouselCaption captionText="React" captionHeader="React" />
      <div className="react-key-points">
        <ul>
          {keyPoints.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ReactSlide;
