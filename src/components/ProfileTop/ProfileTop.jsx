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
      <h2>Profile</h2>
      <section className={styles.imgContainer}>
        <img
          className={styles.profilePic}
          src="https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/1200px-SpongeBob_SquarePants_character.svg.png"
          alt="a sponge"
        />
        x
        console.log(user);
        <img src={user.university.logo} alt="University Logo" />
      </section>
      <section className={styles.info}>
        <h3>{name}</h3>
        <p>{greek}</p>
        <p>{`${university.title} (${university.abbreviation}) '${year}`}</p>
      </section>
    </article>
  );
};

export default ProfileTop;
