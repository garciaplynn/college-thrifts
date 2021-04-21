import React from 'react';
import ClothingCard from '../ClothingCard';
import fakeClothingData from '../../resources/data/fake-data';
import clothingStyles from '../ClothingCard/ClothingCard.module.scss';
import GradientHeader from '../GradientHeader';
import Button from '../Button';
// import uniData from '../../resources/data/university-data';
import styles from './ClothingRail.module.scss';

const ClothingRail = (props) => {
  const { uniData, user } = props;
  const clothingItem = fakeClothingData[0];
  const handleLike = () => {
    user.likes.push(fakeClothingData[0]);
  };

  return (
    <section className={styles.clothingRail}>
      <div className={styles.headerContainer}>
        <GradientHeader uni={uniData} />
      </div>
      <div className={clothingStyles.ClothingCards}>
        <ClothingCard clothingItem={clothingItem} />
      </div>
      <Button handleLike={handleLike} />
    </section>
  );
};

export default ClothingRail;
