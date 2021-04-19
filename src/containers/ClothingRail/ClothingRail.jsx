import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';
import uniData from '../../resources/data/university-data';
import ClothingRailCard from '../../components/ClothingRailCard';

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
  // const uniCards = uniData.map((uniClothingCard) => (
  //   <TinderCard preventSwipe={['down']} onSwipe={(direction) => displayCard(direction)}>
  //     <ClothingRailCard className={styles.uniClothingRailCard} uniData={uniClothingCard} />
  //   </TinderCard>
  // ));

  return (
    <section className={styles.clothingRail}>
      <TinderCard preventSwipe={['down']} onSwipe={(direction) => getUniIndex(direction)}>
        <ClothingRailCard className={styles.uniClothingRailCard} uniData={uniData[index]} />
      </TinderCard>
    </section>
  );
};

export default ClothingRail;
