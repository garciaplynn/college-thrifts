import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import uniData from '../../resources/data/university-data';
import fakeClothingData from '../../resources/data/fake-data';
import GradientHeader from '../../components/GradientHeader';
import ClothingCard from '../../components/ClothingCard';
// import ClothingRailCard from '../../components/ClothingRailCard';

import styles from './ClothingRail.module.scss';

const ClothingRail = () => {
  const [index, updateIndex] = useState(0);
  let swipeDir = '';

  const handlers = useSwipeable({
    onSwipedLeft: (eventData) => {
      console.log('user swiped', eventData.dir);
      swipeDir = `${styles.swipeLeft}`;
      if (index === uniData.length - 1) {
        setTimeout(() => updateIndex(0), 1000);
      } else {
        setTimeout(() => updateIndex(index + 1), 1000);
      }
    },
    onSwipedRight: (eventData) => {
      console.log('user swiped', eventData.dir);
      swipeDir = `${styles.swipeRight}`;
      if (index === 0) {
        setTimeout(() => updateIndex(uniData.length - 1), 1000);
      } else {
        setTimeout(() => updateIndex(index - 1), 1000);
      }
    },
    onSwipedUp: (eventData) => {
      console.log('user swiped', eventData.dir);
      swipeDir = `${styles.swipeUp}`;
    },
  });

  const cardsJSX = (
    <section className={styles.clothingRailCard}>
      <div className={styles.headerContainer}>
        <GradientHeader uni={uniData[index]} />
      </div>
      <div className={`${uniData.ClothingCards} ${styles.clothingCardContainer} ${styles.card}`} ref={handlers.ref}>
        <ClothingCard clothingItem={fakeClothingData[index]} className={swipeDir} />
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
