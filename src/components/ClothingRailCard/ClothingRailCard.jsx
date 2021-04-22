import React from 'react';
import ClothingCard from '../ClothingCard';
import fakeClothingData from '../../resources/data/fake-data';
import clothingStyles from '../ClothingCard/ClothingCard.module.scss';
import GradientHeader from '../GradientHeader';
import Button from '../Button';
// import uniData from '../../resources/data/university-data';
import styles from './ClothingRailCard.module.scss';

const ClothingRailCard = (props) => {
  const { user, uniData } = props;
  const clothingItem = fakeClothingData[0];
  const handleLike = () => {
    user.likes.push(clothingItem);
  };

  return (
    <section className={styles.clothingRailCard}>
      <div className={styles.headerContainer}>
        <GradientHeader uni={uniData} />
        <h2 className={styles.title}>{uniData.title}</h2>
      </div>
      <div className={clothingStyles.ClothingCards}>
        <ClothingCard clothingItem={clothingItem} />
      </div>
      <Button handleLike={handleLike} />
    </section>
  );
};

export default ClothingRailCard;
