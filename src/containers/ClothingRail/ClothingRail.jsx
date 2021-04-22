/*eslint-disable*/
import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import Draggable from 'react-draggable';
import uniData from '../../resources/data/university-data';
import fakeClothingData from '../../resources/data/fake-data';
import GradientHeader from '../../components/GradientHeader';
import ClothingCard from '../../components/ClothingCard';
// import ClothingRailCard from '../../components/ClothingRailCard';

import styles from './ClothingRail.module.scss';

const ClothingRail = () => {
  const [index, updateIndex] = useState(0);
  const [wasSwiped, setWasSwiped] = useState(false);

  let swipeDir = '';

  const defaultStyle = {
    position: 'relative'
  }

  const swipedStyle = {
    transition: '0.5s',
    opacity: 0,
    zIndex: 10,
    transform: 'translateX(-30px) rotate(-30deg)',
    WebkitTransform: 'translateX(-30px) rotate(-30deg)',
    MozTransform: 'translateX(-30px) rotate(-30deg)',
    transition: '1s',
  };

  const handlers = useSwipeable({
    onSwipedLeft: (eventData) => {
      console.log('user swiped', eventData.dir);
      setWasSwiped(true);
      //new
      swipeDir = wasSwiped ? 'swipeLeft' : '';
      if (wasSwiped && index === uniData.length - 1) {
        setTimeout(() => {
          updateIndex(0);
          setWasSwiped(false);
        }, 1000);
      } else if (wasSwiped) {
        setTimeout(() => {
          updateIndex(index + 1);
          setWasSwiped(false);
        }, 1000);
      }
    },
    onSwipedRight: (eventData) => {
      console.log('user swiped', eventData.dir);
      //new
      swipeDir = wasSwiped ? 'swipeRight' : '';
      setWasSwiped(true);
      if (wasSwiped && index === 0) {
        setTimeout(() => {
          updateIndex(uniData.length - 1);
          setWasSwiped(false);
        }, 1000);
      } else if (wasSwiped){
        setTimeout(() => {
          updateIndex(index - 1);
          setWasSwiped(false);
        }, 1000);
      }
    },
    onSwipedUp: (eventData) => {
      console.log('user swiped', eventData.dir);
      //new
      swipeDir = wasSwiped ? 'swipeUp' : '';
      setWasSwiped(true);
      setTimeout(()=>setWasSwiped(false), 1500);
    },
  });

  const cardsJSX = (
    <section className={styles.clothingRailCard}>
      <div className={styles.headerContainer}>
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
