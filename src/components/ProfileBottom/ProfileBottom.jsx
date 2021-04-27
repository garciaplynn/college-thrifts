import React, { useState } from 'react';
import { Link } from '@reach/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faTag, faHeart } from '@fortawesome/free-solid-svg-icons';
import styles from './ProfileBottom.module.scss';

const ProfileBottom = (props) => {
  const { clothingItem, user } = props;
  const { strImage } = clothingItem;

  const [isChecked, setIsChecked] = useState(false);

  const checked = isChecked ? (
    <input type="checkbox" checked />
  ) : (
    <input type="checkbox" />
  );

  const showSelling = isChecked ? styles.displayNone : styles.BuyClothingImage;

  const showBuying = !isChecked ? styles.displayNone : styles.SellClothingImage;
  const likeItems = user.likes.map((item) => (
    <img src={item.strImage} alt={item.strType} />
  ));

  return (
    <>
      <section className={styles.profilePage}>
        <article className={styles.iconBar}>
          <a href="google.co.uk">
            <FontAwesomeIcon icon={faHeart} />
            <> </>
          </a>
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
          <a href="google.co.uk">
            <FontAwesomeIcon icon={faTag} />
            <> </>
          </a>
          <Link id={styles.settingsButton} to="private-profile">
            <FontAwesomeIcon icon={faCog} />
            <> </>
          </Link>
        </article>
        <div className={showBuying}>
          {likeItems}
          <img src={strImage} alt="jumper" />
          <img src={strImage} alt="jumper" />
          <img src={strImage} alt="jumper" />
          <img src={strImage} alt="jumper" />
          <img src={strImage} alt="jumper" />
          <img src={strImage} alt="jumper" />
          <img src={strImage} alt="jumper" />
        </div>

        <div className={showSelling}>{likeItems}</div>
      </section>
    </>
  );
};

export default ProfileBottom;
