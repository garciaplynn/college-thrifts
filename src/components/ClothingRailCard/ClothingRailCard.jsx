import React from 'react';
import ClothingCard from '../ClothingCard';
import fakeClothingData from '../../resources/data/fake-data';
import clothingStyles from '../ClothingCard/ClothingCard.module.scss';
import GradientHeader from '../GradientHeader';
// import uniData from '../../resources/data/university-data';
import styles from './ClothingRailCard.module.scss';

const ClothingRailCard = (props) => {
  const { uniData } = props;
  return (
    <section className={styles.clothingRail}>
      <div className={styles.headerContainer}>
        <GradientHeader uni={uniData} />
      </div>
      <div className={clothingStyles.ClothingCards}>
        <ClothingCard clothingItem={fakeClothingData[0]} />
      </div>
    </section>
  );
};

export default ClothingRailCard;
