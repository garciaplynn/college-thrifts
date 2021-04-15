import React from 'react';
import uniData from '../../resources/data/university-data';
import ClothingRailCard from '../ClothingRailCard';
import styles from './ClothingRail.module.scss';

const ClothingRail = () => {
  const uniCards = uniData.map((uniClothingCard) => (
    <ClothingRailCard className={styles.uniClothingRailCard} uniData={uniClothingCard} />
  ));

  return (
    <section className={styles.clothingRail}>
      {uniCards}
    </section>
  );
};

export default ClothingRail;
