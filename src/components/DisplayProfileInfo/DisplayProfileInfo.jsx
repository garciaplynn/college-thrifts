import React from 'react';
import styles from './DisplayProfileInfo.module.scss';

const DisplayProfileInfo = ({ user }) => {
  const {
    name,
    email,
    following,
    followers,
    socials,
  } = user;

  return (
    <main className={styles.editProfile}>
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
export default DisplayProfileInfo;
