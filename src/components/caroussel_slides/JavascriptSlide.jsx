// import React from 'react';
// import { CarouselCaption } from 'reactstrap';
// import useKeyPoints from '../carousel_slides_icons/slideIcons';


// function JavascriptSlide() {
//   // const keyPoints = [
//   //   'What is Javascript?',
//   //   'Understand the structure of Javascript.',
//   //   'Learn basics of Variables, Functions, Arrays and Objects.',
//   //   'Learn basics of Data structures.',
//   //   'Learn basics of DOM manipulation.',
//   //   'Learn basics of JSON.',
//   //   'Learn basics of Web API',
//   //   'Learn basics of how to use NPM with Javascript',
//   //   'Practice!',
//   // ];
//   const keyPoints = useKeyPoints('javascript');
  

//   return (
//     <>
//       <img src="https://picsum.photos/id/120/1200/400" alt="Javascript Slide" />
//       <div className="slide-content">
//         <div className="caption-title">
//           <h3>JavaScript</h3>
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

// export default JavascriptSlide;

import React from 'react';
import Slide from './allSlides';
import useKeyPoints from '../carousel_slides_icons/slideIcons';

function JavaScriptSlide() {
  const keyPoints = useKeyPoints('javascript');
  return (
    <Slide
      title="JavaScript"
      imgSrc="https://picsum.photos/id/25/1200/400"
      imgAlt="JavaScript Slide"
      keyPoints={keyPoints}
    />
  );
}

export default JavaScriptSlide;
