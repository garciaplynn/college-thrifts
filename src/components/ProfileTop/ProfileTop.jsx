import React from 'react';

import GradientHeader from '../GradientHeader';

import styles from './ProfileTop.module.scss';

const ProfileTop = ({ uni, user }) => {
  const {
    name,
    university,
    classOf,
    greek,
  } = user;
  const year = String(classOf).slice(2);
  return (
    <article className={styles.ProfileTop}>
      <GradientHeader uni={uni} />
      <h2 className={styles.title}>Profile</h2>
      <section className={styles.imgContainer}>
        <img
          className={styles.profilePic}
          src="https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/1200px-SpongeBob_SquarePants_character.svg.png"
          alt="a sponge"
        />
        x
        <img src="https://s3-alpha-sig.figma.com/img/6119/2ef1/506e606237f37ada0168eb311d22d9b3?Expires=1619395200&Signature=Ht2Z10FZCjgcMbSvCNWm2ciDQCo2Ew3VAHkghMK0bsnFpHWjlXL62vx9HYtn1ZwVqbnd2TUWTg3VAC8q9TqbvE3qK-~KC99lmTRK~L-382x8K4cMaqEizNHSxZUT6vU09bUjvHKLTdAYet6v3Euuf3APStMN4EcCMA7Lcsl67zZAAKWVe49raduJ06BqLWZZCIHdQJ2M-PtYGB4MC3~~SVvDeQ6L7dyBDdv-LL2ffHgWW60zfNGiK5lVTsESN0DL4FVNbUhb5vhUFJJXSkxEpDs7IbtnE7I5yDVeK~KHf6pMgWDRUcmX8ahoNLu1diCLyc5O0EKwsOqKODLM6olZ4g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="University Logo" />
      </section>
      <section className={styles.info}>
        <h3>{name}</h3>
        <p>{greek}</p>
        <p>{`${university.name} (${university.abbreviation}) '${year}`}</p>
      </section>
    </article>
  );
};

export default ProfileTop;
