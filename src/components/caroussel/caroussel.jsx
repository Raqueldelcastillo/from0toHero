import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';
import InternetSlide from "../caroussel_slides/InternetSlide";
import HTMLSlide from '../caroussel_slides/HtmlSlide';
import CSSSlide from '../caroussel_slides/CSSSlide';
import GitSlide from '../caroussel_slides/GitSlide';
import JavascriptSlide from '../caroussel_slides/JavascriptSlide';
import NPMSlide from '../caroussel_slides/NPMSlide';
import JestSlide from '../caroussel_slides/JestSlide';
import ReactSlide from '../caroussel_slides/ReactSlide';

const slideComponentMap = {
    'Internet': InternetSlide,
    'HTML': HTMLSlide,
    'CSS': CSSSlide,
    'Git': GitSlide,
    'Javascript': JavascriptSlide,
    'NPM': NPMSlide,
    'Jest': JestSlide,
    'React': ReactSlide,
  };

const DefaultSlide = InternetSlide;

const items = [
  {
    src: 'https://picsum.photos/id/123/1200/400',
    altText: 'Internet',
    caption: 'Internet',
    key: 1,
  },
  {
    src: 'https://picsum.photos/id/456/1200/400',
    altText: 'HTML',
    caption: 'HTML',
    key: 2,
  },
  {
    src: 'https://picsum.photos/id/678/1200/400',
    altText: 'slide 3',
    caption: 'CSS',
    key: 3,
  },
  {
    src: 'https://picsum.photos/1200/400/?blur',
    altText: 'Git',
    caption: 'Git',
    key: 4,
  },
  {
    src: 'https://picsum.photos/1200/400?grayscale',
    altText: 'JS',
    caption: 'Javascript',
    key: 5,
  },
  {
    src: 'https://picsum.photos/1200/400?grayscale',
    altText: 'NPM',
    caption: 'NPM',
    key: 6,
  },
  {
    src: 'https://picsum.photos/1200/400?grayscale',
    altText: 'Jest',
    caption: 'Jest',
    key: 7,
  },
  {
    src: 'https://picsum.photos/1200/400?grayscale',
    altText: 'React',
    caption: 'React',
    key: 8,
  },
];

function RoadMap(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

//   const slides = items.map((item) => {
//     return (
//       <CarouselItem
//         onExiting={() => setAnimating(true)}
//         onExited={() => setAnimating(false)}
//         key={item.src}
//       >
//         <img src={item.src} alt={item.altText} />
//         <CarouselCaption
//           captionText={item.caption}
//           captionHeader={item.caption}
//         />
//       </CarouselItem>
//     );
//   });

const slides = items.map((item) => {
    const SlideComponent = slideComponentMap[item.caption] || DefaultSlide; // Use a default slide component as a fallback

    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.key}
      >
        {SlideComponent ? <SlideComponent /> : (
          <>
            <img src={item.src} alt={item.altText} />
            <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
          </>
        )}
      </CarouselItem>
    );
  });
// const slides = items.map((item) => {
//     if (item.caption === "Internet") {
//       return (
//         <CarouselItem
//           onExiting={() => setAnimating(true)}
//           onExited={() => setAnimating(false)}
//           key={item.key}
//         >
//           <InternetSlide />
//         </CarouselItem>
//       );
//     } else if (item.caption === "HTML") {
//         return (
//           <CarouselItem
//             onExiting={() => setAnimating(true)}
//             onExited={() => setAnimating(false)}
//             key={item.key}
//           >
//             <HTMLSlide />
//           </CarouselItem>
//         );
//       } else {
//       return (
//         <CarouselItem
//           onExiting={() => setAnimating(true)}
//           onExited={() => setAnimating(false)}
//           key={item.key}
//         >
//           <img src={item.src} alt={item.altText} />
//           <CarouselCaption
//             captionText={item.caption}
//             captionHeader={item.caption}
//           />
//         </CarouselItem>
//       );
//     }})


  return (
    <div>
        <h2 className="text-center my-4">Roadmap</h2>
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
    </div>
  );
}

export default RoadMap;