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
            <p>{`${university.name} (${university.abbreviation}) '${year}`}</p>
          </article>
        </section>

        <section
          className={styles.headerContainer}
          style={{
            backgroundColor: university.secondaryColor,
            color: university.primaryColor,
          }}
        >
          <h3>
            <a href="google.co.uk">Likes</a>
          </h3>
          <h3>
            <a href="google.co.uk">Selling</a>
          </h3>
        </section>
      </header>

      <section className={styles.about}>
        <h3 className={styles.aboutTitle}>About</h3>
        <section className={styles.aboutContainer}>
          <h4 className={styles.aboutSubtitle}>Full Name</h4>
          <p>{name}</p>
        </section>
        <section className={styles.aboutContainer}>
          <h4 className={styles.aboutSubtitle}>Email</h4>
          <p>{email}</p>
        </section>
        <section
          className={`${styles.aboutContainer} ${styles.aboutContainerFlex}`}
        >
          <div>
            <h4 className={styles.aboutSubtitle}>Following</h4>
            <p>{`${following} friends`}</p>
          </div>
          <div>
            <h4 className={styles.aboutSubtitle}>Followers</h4>
            <p>{`${followers} friends`}</p>
          </div>
        </section>
        <section className={styles.aboutContainer}>
          <h4 className={styles.aboutSubtitle}>Social URLs</h4>
          <ul>
            {socials.map((social) => (
              <li>{social.url}</li>
            ))}
          </ul>
        </section>
      </section>
    </main>
  );
};

export default EditProfile;
