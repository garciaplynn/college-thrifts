import React, { useState, useEffect } from 'react';
import { Link } from '@reach/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faTag, faHeart } from '@fortawesome/free-solid-svg-icons';
import styles from './ProfileBottom.module.scss';

import { firestore } from '../../firebase';

const ProfileBottom = (props) => {
  const { user } = props;
  const [isChecked, setIsChecked] = useState(false);
  const [likes, setLikes] = useState([]);
  const [selling, setSelling] = useState([]);

  const likedItems = likes.map((item) => (
    <img key={item.id} src={item.strImage} alt={item.strType} />
  ));

  const sellingItems = selling.map((item) => (
    <img key={item.id} src={item.strImage} alt={item.strType} />
  ));

  useEffect(() => {
    firestore
      .collection('users')
      .doc(user.id)
      .collection('likes')
      .get()
      .then((dbLikes) => {
        // set likes state array to likes collection on user
        setLikes(dbLikes.docs.map((doc) => doc.data()));
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(user);
  }, [user]);

  useEffect(() => {
    firestore
      .collection('users')
      .doc(user.id)
      .collection('selling')
      .get()
      .then((dbSelling) => {
        // set selling state array to selling collection on user
        setSelling(dbSelling.docs.map((doc) => doc.data()));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user]);

  useEffect(() => {
    setIsChecked(likes < selling);
  }, [likes, selling]);

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
