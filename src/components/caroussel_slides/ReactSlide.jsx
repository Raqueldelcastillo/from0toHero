import React from 'react';
import { CarouselCaption } from 'reactstrap';
import useKeyPoints from '../carousel_slides_icons/slideIcons';

function ReactSlide() {
  // const keyPoints = [
  //   'Why use Frameworks?',
  //   'What is React?',
  //   'Learn the basics of JSX and Virtual DOM.',
  //   'Learn the basics and how to use Components, Props, State, Hooks.',
  //   'Learn the basics and how to use React Router.',
  //   'API calls.',
  //   'Practice!',
  // ];
  const keyPoints = useKeyPoints('react');

  return (
    <>
      <img src="https://picsum.photos/id/379/1200/400" alt="React Slide" />
      <div className="slide-content">
        <div className="caption-title">
          <h3>Frontend Framework - React</h3>
        </div>
        <div className="key-points">
          <ul>
            {keyPoints.map((point, index) => (
              <li key={index}><point.Icon />{point.text}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default ReactSlide;
