import React, { useState } from 'react';
import { Link } from '@reach/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faTag, faHeart } from '@fortawesome/free-solid-svg-icons';
import styles from './ProfileBottom.module.scss';

const ProfileBottom = (props) => {
  const { user } = props;

  const [isChecked, setIsChecked] = useState(false);

  const checked = isChecked ? (
    <input type="checkbox" checked />
  ) : (
    <input type="checkbox" />
  );

  const showSelling = isChecked ? styles.displayNone : styles.BuyClothingImage;

  const showBuying = !isChecked ? styles.displayNone : styles.SellClothingImage;

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
              {checked}
              <span className={styles.slider} />
            </section>
            <FontAwesomeIcon icon={faTag} className={styles.icon} />
          </section>
          <Link id={styles.settingsButton} to="private-profile">
            <FontAwesomeIcon icon={faCog} className={styles.cogIcon} />
          </Link>
        </article>
        <div className={showBuying}>
          {likedItems}
        </div>
        <div className={showSelling}>{sellingItems}</div>
      </section>
    </>
  );
};

export default ProfileBottom;
