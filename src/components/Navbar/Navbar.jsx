import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Navbar.module.scss';

const Navbar = () => (
  <nav className={styles.Navbar}>
    <a
      id={styles.shoppingButton}
      className={styles.navBtn}
      href="https://google.com"
    >
      <FontAwesomeIcon icon="tag" label="shoppingButton" />
    </a>
    <a
      id={styles.messageButton}
      className={styles.navBtn}
      href="https://google.com"
    >
      <FontAwesomeIcon icon="comments" label="messageButton" />
    </a>
    <a
      id={styles.cameraButton}
      className={styles.navBtn}
      href="https://google.com"
    >
      <FontAwesomeIcon icon="camera" label="cameraButton" />
    </a>
    <a
      id={styles.carbonFootprintButton}
      className={styles.navBtn}
      href="https://google.com"
    >
      <FontAwesomeIcon icon="globe" label="carbonFootprintButton" />
    </a>
    <a
      id={styles.profileButton}
      className={styles.navBtn}
      href="https://google.com"
    >
      <FontAwesomeIcon icon="user-circle" label="profileButton" />
    </a>
  </nav>
);

export default Navbar;
