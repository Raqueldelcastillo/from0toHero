// import React from 'react';
// import { CarouselCaption } from 'reactstrap';
// import useKeyPoints from '../carousel_slides_icons/slideIcons';


// function CSSSlide() {
//   // const keyPoints = [
//   //   'What is CSS and what it is used for?',
//   //   'Understand the basics.',
//   //   'Learn layout techniques.',
//   //   'Explore CSS properties.',
//   //   'Understand specificity and inheritance.',
//   //   'Practice responsivness.'
//   // ];
//   const keyPoints = useKeyPoints('css');

//   return (
//     <>
//       <img src="https://picsum.photos/id/48/1200/400" alt="CSS Slide" />
//       <div className="slide-content">
//         <div className="caption-title">
//           <h3>CSS - Cascading Style Sheet</h3>
//         </div>
//         <div className="key-points">
//           <ul>
//             {keyPoints.map((point, index) => (
//               <li key={index}><point.Icon />{point.text}</li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </>
//   );
// }

// export default CSSSlide;

import React from 'react';
import Slide from './allSlides';
import useKeyPoints from '../carousel_slides_icons/slideIcons';

function CSSSlide() {
  const keyPoints = useKeyPoints('css');

  return (
    <Slide
      title="CSS - Cascading Style Sheets"
      imgSrc="https://picsum.photos/id/48/1200/400"
      imgAlt="CSS Slide"
      keyPoints={keyPoints}
    />
  );
}

export default CSSSlide;
