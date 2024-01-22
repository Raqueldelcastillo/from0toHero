import React from 'react';

function Slide({ title, imgSrc, imgAlt, keyPoints }) {
  return (
    <>
      <img src={imgSrc} alt={imgAlt} />
      <div className="slide-content">
        <div className="caption-title">
          <h3>{title}</h3>
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

export default Slide;
