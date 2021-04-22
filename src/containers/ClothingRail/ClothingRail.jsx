/*eslint-disable*/
import React, { useState, useEffect } from 'react';
import { LEFT, useSwipeable } from 'react-swipeable';
import uniData from '../../resources/data/university-data';
import fakeClothingData from '../../resources/data/fake-data';
import GradientHeader from '../../components/GradientHeader';
import ClothingCard from '../../components/ClothingCard';
// import ClothingRailCard from '../../components/ClothingRailCard';

import styles from './ClothingRail.module.scss';

const ClothingRail = () => {
  const [index, updateIndex] = useState(0);
  const [wasSwiped, setWasSwiped] = useState(false);

  // State of direction
  // Style setter function :+1:
  // State in the if statements instead

  let right = false;
  let left = false;
  let up = false;

  const defaultStyle = {
    opacity: 1,
	  animation: 'fadeInOpacity',
    transition: '0.5s',
  }

  // let swipedStyleLeft = {
  //   transition: '0.5s',
  //   opacity: 0.5,
  //   zIndex: 10,
  //   transform: 'translateX(-250px)',
  //   WebkitTransform: 'translateX(-250px)',
  //   MozTransform: 'translateX(-250px)',
  // };

  // const styleSetter = () => {
  //   let swipedStyle = {};
  //   if (left) {
  //     swipedStyle = {
  //       transition: '0.5s',
  //       opacity: 0.5,
  //       zIndex: 10,
  //       transform: 'translateX(-250px)',
  //       WebkitTransform: 'translateX(-250px)',
  //       MozTransform: 'translateX(-250px)',
  //     };
  //   } else if (right) {
  //    swipedStyle = {
  //       transition: '0.5s',
  //       opacity: 0.5,
  //       zIndex: 10,
  //       transform: 'translateX(250px)',
  //       WebkitTransform: 'translateX(250px)',
  //       MozTransform: 'translateX(250px)',
  //     };
  //   } else if (up) {
  //      swipedStyle = {
  //       transition: '0.5s',
  //       opacity: 0.5,
  //       zIndex: 10,
  //       transform: 'translateY(250px)',
  //       WebkitTransform: 'translateY(250px)',
  //       MozTransform: 'translateY(250px)',
  //     } else {
  //   }
  //   return swipedStyle;
  // };

  const swipedStyle = {
    transition: '0.5s',
    opacity: 0.5,
    zIndex: 10,
    transform: 'translateX(250px)',
    WebkitTransform: 'translateX(250px)',
    MozTransform: 'translateX(250px)',
  }
  
  useEffect(() => {
    setWasSwiped(false);
    // Reset direction state back to ""
  }, [index]);

  const handlers = useSwipeable({
    onSwipedLeft: (eventData) => {
      left = true;
      console.log('user swiped', eventData.dir);
      setWasSwiped(true);
      //new
      // swipeDir = wasSwiped ? 'swipeLeft' : '';
      if (index === uniData.length - 1) {
        setTimeout(() => {
          updateIndex(0);
        }, 500);
      } else {
        setTimeout(() => {
          updateIndex(index + 1);
        }, 500);
      }
    },
    onSwipedRight: (eventData) => {
      right = true;
      console.log('user swiped', eventData.dir);
      //new
      // swipeDir = wasSwiped ? 'swipeRight' : '';
      setWasSwiped(true);
      if (index === 0) {
        setTimeout(() => {
          updateIndex(uniData.length - 1);
        }, 500);
      } else {
        setTimeout(() => {
          updateIndex(index - 1);
        }, 500);
      }
    },
    onSwipedUp: (eventData) => {
      up = true;
      console.log('user swiped', eventData.dir);
      //new
      // swipeDir = wasSwiped ? 'swipeUp' : '';
      setWasSwiped(true);
      setTimeout(() => setWasSwiped(false), 500);
    },
  });

  const cardsJSX = (
    <section className={styles.clothingRailCard}>
      <div style={defaultStyle} className={styles.headerContainer}>
        <GradientHeader uni={uniData[index]} />
      </div>
      <div style={wasSwiped ? swipedStyle : defaultStyle} ref={handlers.ref}>
        <ClothingCard clothingItem={fakeClothingData[index]} />
      </div>
    </section>
  );

  return (
    <section>
      {cardsJSX}
    </section>
  );
};

export default ClothingRail;
// onMouseDown={getHTML} role="button" tabIndex="0
