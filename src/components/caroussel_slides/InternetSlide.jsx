// import React from 'react';
// import { CarouselCaption } from 'reactstrap';
// import useKeyPoints from '../carousel_slides_icons/slideIcons';

// function InternetSlide() {
//   // const keyPoints = [
//   //   'How does Internet work?',
//   //   'How do websites work?',
//   //   'How to get help when you are stuck?',
//   // ];
//   const keyPoints = useKeyPoints('internet');

//   return (
//     <>
//       <img src="https://picsum.photos/id/24/1200/400" alt="Internet Slide" />
//       <div className="slide-content">
//         <div className="caption-title">
//           <h3>Internet</h3>
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


// export default InternetSlide;

import React from 'react';
import Slide from './allSlides';
import useKeyPoints from '../carousel_slides_icons/slideIcons';

function InternetSlide() {
  const keyPoints = useKeyPoints('internet');
  return (
    <Slide
      title="Internet"
      imgSrc="https://picsum.photos/id/24/1200/400"
      imgAlt="Internet Slide"
      keyPoints={keyPoints}
    />
  );
}

export default InternetSlide;
