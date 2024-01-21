import React from 'react';
import { CarouselCaption } from 'reactstrap';

function GitSlide() {
  const keyPoints = [
    'What is Github and Git?',
    'Benefits of using Git.',
    'Install and create GitHub profile.',
    'Learn basics of Git.',
    'Git workflow.',
    'Practice!',
  ];

  return (
    <>
      <img src="https://picsum.photos/id/456/1200/400" alt="Git Slide" />
      <CarouselCaption captionText="Git" captionHeader="Git" />
      <div className="git-key-points">
        <ul>
          {keyPoints.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default GitSlide;
