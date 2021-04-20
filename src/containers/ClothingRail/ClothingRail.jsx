import React from 'react';
import SwipeListener from 'swipe-listener';
import uniData from '../../resources/data/university-data';
import fakeClothingData from '../../resources/data/fake-data';
import GradientHeader from '../../components/GradientHeader';
import ClothingCard from '../../components/ClothingCard';
// import ClothingRailCard from '../../components/ClothingRailCard';

import styles from './ClothingRail.module.scss';

const ClothingRail = () => {
  // const uniCards = fakeClothingData.map((uniClothingCard) => (
  //   <ClothingCard clothingItem={uniClothingCard} />
  // ));
  const getHTML = () => {
    const clothingCardContainer = document.querySelector('.clothingCard');
    const listener = SwipeListener(clothingCardContainer);
    clothingCardContainer.addEventListener('swipe', (event) => {

      const getUniIndex = () => {
        if (event.details.direction.left) {
          updateIndex(index - 1);
        } else if (event.details.direction.left && index === 0) {
          updateIndex(uniData.length - 1);
        } else if (event.details.direction.right && index !== uniData.length - 1) {
          updateIndex(index + 1);
        } else if (event.details.direction.right && index === uniData.length - 1) {
          updateIndex(0);
        }
      };
      console.log(`you've swiped! ${listener}`);
    });
  };

  const cardsJSX = (

    <section className={styles.clothingRailCard}>
      <div className={styles.headerContainer}>
        <GradientHeader uni={uniData[0]} />
      </div>
      <div className={`${uniData.ClothingCards} clothingCard`} onMouseDown={getHTML} role="button" tabIndex="0">
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
