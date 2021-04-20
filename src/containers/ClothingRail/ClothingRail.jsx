import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
// import SwipeListener from 'swipe-listener';
import uniData from '../../resources/data/university-data';
import fakeClothingData from '../../resources/data/fake-data';
import GradientHeader from '../../components/GradientHeader';
import ClothingCard from '../../components/ClothingCard';
// import ClothingRailCard from '../../components/ClothingRailCard';

import styles from './ClothingRail.module.scss';

const ClothingRail = () => {
  const [index, updateIndex] = useState(0);

  const handlers = useSwipeable({
    onSwipedLeft: (eventData) => {
      console.log('user swiped', eventData.dir);
      if (index === uniData.length - 1) {
        updateIndex(0);
      } else {
        updateIndex(index + 1);
      }
    },
    onSwipedRight: (eventData) => {
      console.log('user swiped', eventData.dir);
      if (index === 0) {
        updateIndex(uniData.length - 1);
      } else {
        updateIndex(index - 1);
      }
    },
    onSwipedUp: (eventData) => {
      console.log('user swiped', eventData.dir);
      alert('you swiped up!');
    },
  });

  const cardsJSX = (
    <section className={styles.clothingRailCard}>
      <div className={styles.headerContainer}>
        <GradientHeader uni={uniData[index]} />
      </div>
      <div className={`${uniData.ClothingCards} clothingCard`} ref={handlers.ref}>
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
