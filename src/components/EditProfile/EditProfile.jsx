import React from 'react';

import styles from './EditProfile.module.scss';

const EditProfile = ({ user }) => {
  const {
    name,
    university,
    classOf,
    email,
    following,
    followers,
    socials,
  } = user;

  const year = String(classOf).slice(2);

  return (
    <main className={styles.editProfile}>
      <header>
        <h2>Profile</h2>
        <section
          className={styles.headerContainer}
          style={{
            backgroundColor: university.primaryColor,
            color: university.secondaryColor,
          }}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/1200px-SpongeBob_SquarePants_character.svg.png"
            alt="a sponge"
          />
          <article className={styles.headerInfo}>
            <h3>{name}</h3>
            <p>{`${university.name} ${university.abbreviation} '${year}`}</p>
          </article>
        </section>

        <section className={styles.headerContainer}>
          <a href="google.co.uk">Likes</a>
          <a href="google.co.uk">Selling</a>
        </section>
      </header>
      <section>
        <h3 className={styles.about}>About</h3>
        <h4 className={styles.subtitles}>Full Name</h4>
        <p>{name}</p>
        <h4 className={styles.subtitles}>Email</h4>
        <p>{email}</p>
        <h4 className={styles.subtitles}>Following</h4>
        <p>{following}</p>
        <h4 className={styles.subtitles}>Followers</h4>
        <p>{followers}</p>
        <h4 className={styles.subtitles}>Social URLs</h4>
        <ul>
          {socials.map((social) => (
            <li>{social.url}</li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default EditProfile;
