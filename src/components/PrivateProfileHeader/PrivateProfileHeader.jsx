import React from 'react';
import styles from './PrivateProfileHeader.module.scss';
import GradientHeader from '../GradientHeader';
import uniData from '../../resources/data/university-data';

const PrivateProfileHeader = ({ user, toggleIsEditing }) => {
  const { name, university, classOf } = user;

  const year = String(classOf).slice(2);

  return (
    <header className={styles.header}>
      <GradientHeader uni={uniData[0]} />
      <h2>Profile</h2>
      <section className={styles.headerContainer}>
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/1200px-SpongeBob_SquarePants_character.svg.png"
          alt="a sponge"
        />
        <article className={styles.headerInfo}>
          <h3>{name}</h3>
          <p>{`${university.name} (${university.abbreviation}) '${year}`}</p>
        </article>
      </section>
      <div className={styles.aboutWrapper}>
        <h3 className={styles.aboutTitle}>About</h3>
        <button type="button" onClick={toggleIsEditing}>
          Edit profile
        </button>
      </div>
    </header>
  );
};

export default PrivateProfileHeader;
