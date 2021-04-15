import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faTag, faHeart } from '@fortawesome/free-solid-svg-icons';
import styles from './ProfileScreen.module.scss';

const ProfileScreen = (props) => {
  const { clothingItem } = props;
  const { strImage } = clothingItem;

  return (
    <>
      <section className={styles.profilePage}>
        <article>
          <a href="google.co.uk">
            <FontAwesomeIcon icon={faHeart} />
            Likes
          </a>
          <section className={styles.switch}>
            <input type="checkbox" />
            <span className={styles.slider} />
          </section>
          <a href="google.co.uk">
            <FontAwesomeIcon icon={faTag} />
            Selling
          </a>
          <a href="google.co.uk">
            <FontAwesomeIcon icon={faCog} />
            Settings
          </a>
        </article>
        <div className={styles.ClothingImage}>
          <img src={strImage} alt="jumper" />
        </div>
      </section>
    </>
  );
};

export default ProfileScreen;
