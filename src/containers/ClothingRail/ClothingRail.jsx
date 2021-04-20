/*eslint-disable*/
import React from 'react';
import { useSwipeable } from 'react-swipeable';
// import SwipeListener from 'swipe-listener';
import uniData from '../../resources/data/university-data';
import fakeClothingData from '../../resources/data/fake-data';
import GradientHeader from '../../components/GradientHeader';
import ClothingCard from '../../components/ClothingCard';
// import ClothingRailCard from '../../components/ClothingRailCard';

import styles from './ClothingRail.module.scss';

const ClothingRail = () => {
  const handlers = useSwipeable({
    onSwipedLeft: (eventData) => console.log('user swiped', eventData),
    onSwipedRight: (eventData) => console.log('user swiped', eventData),
    onSwipedUp: (eventData) => console.log('user swiped', eventData),
  });

  const cardsJSX = (

    <section className={styles.clothingRailCard}>
      <div className={styles.headerContainer}>
        <GradientHeader uni={uniData[0]} />
      </div>
      <div className={`${uniData.ClothingCards} clothingCard`} {...handlers}>
        <ClothingCard clothingItem={fakeClothingData[0]} />
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
