import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './PrivateProfileHeader.module.scss';
import GradientHeader from '../GradientHeader';
import uniData from '../../resources/data/university-data';

const PrivateProfileHeader = ({ user }) => {
  const [avatarURL, setAvatarURL] = useState('https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/1280px-SpongeBob_SquarePants_character.svg.png');
  // const [avatarFile, setAvatarFile] = useState('');
  // const [avatarName, setAvatarName] = useState('');

  const { name, university, classOf } = user;
  const year = String(classOf).slice(2);

  const changeAvatar = (e) => {
    const file = e.target.files[0];

    if (file) {
      // setAvatarName(file.name);
      // setAvatarFile(file);
      setAvatarURL(window.URL.createObjectURL(file));
    }
  };

  return (
    <>
      <GradientHeader uni={uniData[2]} />
      <header className={styles.header}>
        <h2>Profile</h2>
        <section className={styles.headerContainer}>
          <div className={styles.image}>
            <img
              src={avatarURL}
              alt="avatar"
            />
            <label htmlFor="avatar" className={styles.avatarButton}>
              <FontAwesomeIcon icon="plus-circle" className={styles.avatarIcon} />
              <span />
              <input
                type="file"
                id="avatar"
                name="avatar"
                accept="image/png, image/jpeg"
                multiple="false"
                onChange={changeAvatar}
              />
            </label>
          </div>
          <article className={styles.headerInfo}>
            <h3>{name}</h3>
            <p>{`${university.title} (${university.abbreviation}) '${year}`}</p>
          </article>
        </section>
      </header>
    </>
  );
};

export default PrivateProfileHeader;
