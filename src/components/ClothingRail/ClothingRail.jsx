import React from 'react';
import ClothingCard from '../ClothingCard';
import fakeClothingData from '../../resources/data/fake-data';
import clothingStyles from '../ClothingCard/ClothingCard.module.scss';
import GradientHeader from '../GradientHeader';
import Filter from '../FilterButton';
// import uniData from '../../resources/data/university-data';
import Button from '../Button';
import styles from './ClothingRail.module.scss';

const ClothingRail = (props) => {
  const { user, uniData } = props;
  const clothingItem = fakeClothingData[0];

  const handleLike = () => {
    user.likes.push(clothingItem);
  };

  return (
    <section className={styles.clothingRail}>
      <div className={styles.headerContainer}>
        <GradientHeader uni={uniData} />
        <Filter />
        <h2 className={styles.title}>{uniData.title}</h2>
      </div>
      <div className={clothingStyles.ClothingCards}>
        <ClothingCard clothingItem={clothingItem} />
      </div>
      <Button handleLike={handleLike} />
    </section>
  );
};

export default ClothingRail;
