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
      <img src="https://picsum.photos/id/98/1200/400" alt="Git Slide" />
      <div className="slide-content">
        <div className="caption-title">
          <h3>Git</h3>
        </div>
        <div className="git-key-points">
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

export default GitSlide;
