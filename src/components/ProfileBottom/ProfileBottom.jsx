import React, { useState } from 'react';
import { Link } from '@reach/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faTag, faHeart } from '@fortawesome/free-solid-svg-icons';
import styles from './ProfileBottom.module.scss';

import ImageUpload from '../ImageUpload';

const ProfileBottom = (props) => {
  const { user } = props;

  const [isChecked, setIsChecked] = useState(user.selling > user.likes);

  const likedItems = user.likes.map((item) => (
    <img src={item.strImage} alt={item.strType} />
  ));

  const sellingItems = user.selling.map((item) => (
    <img src={item.strImage} alt={item.strType} />
  ));

  return (
    <>
      <section className={styles.profilePage}>
        <article className={styles.iconBar}>
          <section className={styles.toggleContainer}>
            <FontAwesomeIcon icon={faHeart} className={styles.icon} />
            <section
              className={styles.switch}
              onClick={() => setIsChecked(!isChecked)}
              onKeyDown={() => setIsChecked(!isChecked)}
              role="button"
              tabIndex="0"
            >
              <input type="checkbox" checked={isChecked} readOnly />
              <span className={styles.slider} />
            </section>
            <FontAwesomeIcon icon={faTag} className={styles.icon} />
          </section>
          <Link id={styles.settingsButton} to="private-profile">
            <FontAwesomeIcon icon={faCog} className={styles.cogIcon} />
          </Link>
        </article>
        <section className={styles.ClothingImage}>
          {isChecked ? sellingItems : likedItems}
          <ImageUpload />
        </section>
      </section>
    </>
  );
};

export default ProfileBottom;
