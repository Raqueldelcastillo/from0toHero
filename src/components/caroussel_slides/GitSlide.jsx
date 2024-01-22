// import React from 'react';
// import { CarouselCaption } from 'reactstrap';
// import useKeyPoints from '../carousel_slides_icons/slideIcons';


// function GitSlide() {
//   // const keyPoints = [
//   //   'What is Github and Git?',
//   //   'Benefits of using Git.',
//   //   'Install and create GitHub profile.',
//   //   'Learn basics of Git.',
//   //   'Git workflow.',
//   //   'Practice!',
//   // ];

//   const keyPoints = useKeyPoints('git');

//   return (
//     <>
//       <img src="https://picsum.photos/id/98/1200/400" alt="Git Slide" />
//       <div className="slide-content">
//         <div className="caption-title">
//           <h3>Git</h3>
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

// export default GitSlide;

import React from 'react';
import Slide from './allSlides';
import useKeyPoints from '../carousel_slides_icons/slideIcons';

function GitSlide() {
  const keyPoints = useKeyPoints('git');

  return (
    <Slide
      title="Git - Version Control System"
      imgSrc="https://picsum.photos/id/98/1200/400"
      imgAlt="Git Slide"
      keyPoints={keyPoints}
    />
  );
}

export default GitSlide;

