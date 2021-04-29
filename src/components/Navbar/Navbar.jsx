import React from 'react';
import { Link } from '@reach/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Navbar.module.scss';

const Navbar = () => (
  <nav className={styles.Navbar}>
    <Link
      id={styles.shoppingButton}
      className={styles.navBtn}
      to="/"
    >
      <FontAwesomeIcon icon="tag" label="shoppingButton" />
    </Link>
    <Link
      id={styles.messageButton}
      className={styles.navBtn}
      to="message-inbox"
    >
      <FontAwesomeIcon icon="comments" label="messageButton" />
    </Link>
    <Link
      id={styles.cameraButton}
      className={styles.navBtn}
      to="upload-picture"
    >
      <FontAwesomeIcon icon="camera" label="cameraButton" />
    </Link>
    <Link
      id={styles.carbonFootprintButton}
      className={styles.navBtn}
      to="carbon-footprint"
    >
      <FontAwesomeIcon icon="globe-americas" label="carbonFootprintButton" />
    </Link>
    <Link
      id={styles.profileButton}
      className={styles.navBtn}
      to="profile"
    >
      <FontAwesomeIcon icon="user-circle" label="profileButton" />
    </Link>
  </nav>
);

export default Navbar;
