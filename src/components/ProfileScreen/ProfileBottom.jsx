import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faTag, faHeart } from '@fortawesome/free-solid-svg-icons';
import styles from './ProfileBottom.module.scss';

const ProfileBottom = (props) => {
  const { clothingItem } = props;
  const { strImage } = clothingItem;

  const [isChecked, setIsChecked] = useState(false);

  const checked = isChecked ? <input type="checkbox" checked /> : <input type="checkbox" />;

  const showSelling = isChecked ? styles.displayNone : styles.BuyClothingImage;

  const showBuying = !isChecked ? styles.displayNone : styles.SellClothingImage;

  return (
    <>
      <section className={styles.profilePage}>

        <article className={styles.iconBar}>
          <a href="google.co.uk">
            <FontAwesomeIcon icon={faHeart} />
            <> </>
            Likes
          </a>
          <section className={styles.switch} onClick={() => setIsChecked(!isChecked)} onKeyDown={() => setIsChecked(!isChecked)} role="button" tabIndex="0">
            {checked}
            <span className={styles.slider} />
          </section>
          <a href="google.co.uk">
            <FontAwesomeIcon icon={faTag} />
            <> </>
            Selling
          </a>
          <a href="google.co.uk">
            <FontAwesomeIcon icon={faCog} />
            <> </>
            Settings
          </a>
        </article>
        <div className={showBuying}>
          <img src={strImage} alt="jumper" />
          <img src={strImage} alt="jumper" />
          <img src={strImage} alt="jumper" />
          <img src={strImage} alt="jumper" />
          <img src={strImage} alt="jumper" />
          <img src={strImage} alt="jumper" />
          <img src={strImage} alt="jumper" />
          <img src={strImage} alt="jumper" />
          <img src={strImage} alt="jumper" />
        </div>

        <div className={showSelling}>
          <img src={strImage} alt="jumper" />
          <img src={strImage} alt="jumper" />
          <img src={strImage} alt="jumper" />
          <img src={strImage} alt="jumper" />
          <img src={strImage} alt="jumper" />
          <img src={strImage} alt="jumper" />
          <img src={strImage} alt="jumper" />
        </div>
      </section>
    </>
  );
};

export default ProfileBottom;
