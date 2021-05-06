import { React, useState } from 'react';
import styles from './EditProfileInfo.module.scss';

const EditProfileInfo = ({ user, toggleIsEditing }) => {
  const {
    name,
    email,
    following,
    followers,
    socials,
  } = user;

  const [inputValues, setInputValues] = useState({
    name,
    email,
  });

  const handleChange = (e) => {
    const { value } = e.target;
    const inputName = e.target.name;
    setInputValues({ ...inputValues, [inputName]: value });
  };

  return (
    <main className={styles.editProfile}>
      <section className={styles.about}>
        <div className={styles.aboutWrapper}>
          <h3 className={styles.aboutTitle}>About</h3>
          <button className={styles.editButton} type="button" onClick={toggleIsEditing}>
            Edit profile
          </button>
        </div>
        <section className={styles.aboutContainer}>
          <h4 className={styles.aboutSubtitle}>Full Name</h4>
          <input type="text" name="name" value={inputValues.name} onChange={handleChange} />
        </section>
        <section className={styles.aboutContainer}>
          <h4 className={styles.aboutSubtitle}>Email</h4>
          <input type="email" name="email" value={inputValues.email} onChange={handleChange} />
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

export default EditProfileInfo;
