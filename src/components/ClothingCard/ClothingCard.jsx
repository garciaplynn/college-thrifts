/* eslint-disable react/prop-types */
import React from 'react';

import styles from './ClothingCard.module.scss';

const ClothingCard = (props) => {
  const { clothingItem } = props;
  const {
    strImage, strPrice, strSize, strType,
  } = clothingItem;

  return (
    <div className="ClothingCards">
      <div className={styles.ImageCard}>
        <img src={strImage} alt="Clothing" />
      </div>
      <section className={styles.clothingSection}>
        <div className={styles.clothingInfo}>
          <h3>{strType}</h3>
          <p>
            Size:
            <> </>
            {strSize}
          </p>
        </div>
        <div>
          <h2>{strPrice}</h2>
        </div>

      </section>
    </div>
  );
};

export default ClothingCard;
