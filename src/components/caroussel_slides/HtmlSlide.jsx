// import React from 'react';
// import { CarouselCaption } from 'reactstrap';
// import useKeyPoints from '../carousel_slides_icons/slideIcons';

// function HTMLSlide() {
//   // const keyPoints = [
//   //   'What is HTML?',
//   //   'What is HTML element?',
//   //   'HTML page structure',
//   //   'Basic HTML elements and tags',
//   //   'Practice',
//   // ];
//   const keyPoints = useKeyPoints('html');
  

//   return (
//     <>
//       <img src="https://picsum.photos/id/41/1200/400" alt="HTML Slide" />
//       <div className="slide-content">
//         <div className="caption-title">
//           <h3>HTML - The HyperText Markup Language</h3>
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

// export default HTMLSlide;

import React from 'react';
import Slide from './allSlides';
import useKeyPoints from '../carousel_slides_icons/slideIcons';

function HTMLSlide() {
  const keyPoints = useKeyPoints('html');

  return (
    <Slide
      title="HTML - The HyperText Markup Language"
      imgSrc="https://picsum.photos/id/41/1200/400"
      imgAlt="HTML Slide"
      keyPoints={keyPoints}
    />
  );
}

export default HTMLSlide;
