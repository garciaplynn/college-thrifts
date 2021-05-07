import React from 'react';
import { Link } from '@reach/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Navbar.module.scss';

const Navbar = ({ activePage }) => (
  <nav className={styles.Navbar}>
    <Link
      id={styles.shoppingButton}
      className={activePage === 'clothingRail' ? `${styles.active} ${styles.navBtn}` : styles.navBtn}
      to="/"
    >
      <FontAwesomeIcon icon="tag" label="shoppingButton" />
    </Link>
    <Link
      id={styles.messageButton}
      className={activePage === 'messageInbox' ? `${styles.active} ${styles.navBtn}` : styles.navBtn}
      to="message-inbox"
    >
      <FontAwesomeIcon icon="comments" label="messageButton" />
    </Link>
    <Link
      id={styles.cameraButton}
      className={activePage === 'uploadPicture' ? `${styles.active} ${styles.navBtn}` : styles.navBtn}
      to="upload-picture"
    >
      <FontAwesomeIcon icon="camera" label="cameraButton" />
    </Link>
    <Link
      id={styles.carbonFootprintButton}
      className={activePage === 'carbonFootprint' ? `${styles.active} ${styles.navBtn}` : styles.navBtn}
      to="carbon-footprint"
    >
      <FontAwesomeIcon icon="globe-americas" label="carbonFootprintButton" />
    </Link>
    <Link
      id={styles.profileButton}
      className={activePage === 'profile' ? `${styles.active} ${styles.navBtn}` : styles.navBtn}
      to="profile"
    >
      <FontAwesomeIcon icon="user-circle" label="profileButton" />
    </Link>
  </nav>
);

export default Navbar;
