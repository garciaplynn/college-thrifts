import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';
import uniData from '../../resources/data/university-data';
import fakeClothingData from '../../resources/data/fake-data';
import GradientHeader from '../../components/GradientHeader';
// import ClothingCard from '../../components/ClothingCard';
// import ClothingRailCard from '../../components/ClothingRailCard';

import styles from './ClothingRail.module.scss';

const ClothingRail = () => {
  const [index, updateIndex] = useState(0);

  const getUniIndex = (direction) => {
    if (direction === 'left' && index > 0) {
      updateIndex(index - 1);
    } else if (direction === 'left' && index === 0) {
      updateIndex(uniData.length - 1);
    } else if (direction === 'right' && index !== uniData.length - 1) {
      updateIndex(index + 1);
    } else if (direction === 'right' && index === uniData.length - 1) {
      updateIndex(0);
    }
  };

  const uniCards = fakeClothingData.map((uniClothingCard) => (
    <TinderCard preventSwipe={['down']} onSwipe={(direction) => getUniIndex(direction)}>
      <ClothingRailCard className={styles.uniClothingRailCard} uniData={uniClothingCard} />
    </TinderCard>
  ));

  const cardsJSX = (

    <section className={styles.clothingRailCard}>
      <div className={styles.headerContainer}>
        <GradientHeader uni={uniData[index]} />
      </div>
      <div className={uniData.ClothingCards}>
        {uniCards}
        {/* <TinderCard preventSwipe={['down']} onSwipe={(direction) => getUniIndex(direction)}>
          <ClothingCard clothingItem={fakeClothingData[index]} />
        </TinderCard> */}
      </div>
    </section>
    // <ClothingRailCard className={styles.uniClothingRailCard} uniData={uniData[index]} />
  );

  return (
    <section>
      {cardsJSX}
    </section>
    // <TinderCard preventSwipe={['down']} onSwipe={(direction) => getUniIndex(direction)}>
    //   <ClothingRailCard className={styles.uniClothingRailCard} uniData={uniData[index]} />
    // </TinderCard>
  );
};

export default ClothingRail;
