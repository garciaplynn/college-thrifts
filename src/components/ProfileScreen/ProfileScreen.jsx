import React from 'react';
import styles from './ProfileScreen.module.scss';

const ProfileScreen = (props) => {
  const { clothingItem } = props;
  const {
    strImage,
  } = clothingItem;

  return (

    <>
      <div className={styles.ClothingImagePage}>
        <div className={styles.ClothingImage}>
          <img src={strImage} alt="jumper" />
        </div>
      </div>
      <h2>Hello</h2>
    </>
  );
};

export default ProfileScreen;
