import React from 'react';
import TinderCard from 'react-tinder-card';
import uniData from '../../resources/data/university-data';
import ClothingRailCard from '../../components/ClothingRailCard';

import styles from './ClothingRail.module.scss';

const ClothingRail = () => {
  const uniCards = uniData.map((uniClothingCard) => (
    <TinderCard preventSwipe={['down']}>
      <ClothingRailCard className={styles.uniClothingRailCard} uniData={uniClothingCard} />
    </TinderCard>
  ));

  return (
    <section className={styles.clothingRail}>
      {uniCards}
    </section>
  );
};

export default ClothingRail;
