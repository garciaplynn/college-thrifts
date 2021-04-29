import React, { useState } from 'react';
import { Link } from '@reach/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faTag, faHeart } from '@fortawesome/free-solid-svg-icons';
import ProfileItemButton from '../ProfileItemButton';
import styles from './ProfileBottom.module.scss';

const ProfileBottom = (props) => {
  const { user, setClickedItemId } = props;
  // const { strImage } = clothingItem;

  const [isChecked, setIsChecked] = useState(user.selling > user.likes);

  // const showBuying = !isChecked ? styles.displayNone : styles.SellClothingImage;

  const likedItems = user.likes.map((item) => (
    <ProfileItemButton
      setClickedItemId={setClickedItemId}
      item={item}
    />
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
        </section>
      </section>
    </>
  );
};

export default ProfileBottom;
