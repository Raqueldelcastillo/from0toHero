// import React from 'react';
// import { CarouselCaption } from 'reactstrap';
// import useKeyPoints from '../carousel_slides_icons/slideIcons';

// function NPMSlide() {
//   // const keyPoints = [
//   //   'What is NPM?',
//   //   'What is Node.js?',
//   //   'Learn the basics of its Dependencies.',
//   //   'How to install and use NPM?',
//   //   'Learn using it with Package.json.',
//   //   'Practice!',
//   // ];
//   const keyPoints = useKeyPoints('npm');

//   return (
//     <>
//       <img src="https://picsum.photos/id/143/1200/400" alt="NPM Slide" />
//       <div className="slide-content">
//         <div className="caption-title">
//           <h3>Package Managers - NPM</h3>
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

// export default NPMSlide;

import React from 'react';
import Slide from './allSlides';
import useKeyPoints from '../carousel_slides_icons/slideIcons';

function NPMSlide() {
  const keyPoints = useKeyPoints('npm');

  return (
    <Slide
      title="Package Managers - NPM"
      imgSrc="https://picsum.photos/id/143/1200/400"
      imgAlt="NPM Slide"
      keyPoints={keyPoints}
    />
  );
}

export default NPMSlide;
