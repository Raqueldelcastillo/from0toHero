import React from 'react';
import { CarouselCaption } from 'reactstrap';
import useKeyPoints from '../carousel_slides_icons/slideIcons';

function JestSlide() {
  // const keyPoints = [
  //   'Understand the importance of testing.',
  //   'What is Jest?',
  //   'Install and set up Jest.',
  //   'Learn the basics of testing functions.',
  //   'Learn the basics of how to debug the failed test.',
  //   'Practice!',
  // ];
  const keyPoints = useKeyPoints('jest');

  return (
    <>
      <img src="https://picsum.photos/id/307/1200/400" alt="Jest Slide" />
      <div className="slide-content">
        <div className="caption-title">
          <h3>Testing your App - Jest</h3>
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

export default JestSlide;
