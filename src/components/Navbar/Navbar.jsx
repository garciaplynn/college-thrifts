import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUserCircle, faComments } from '@fortawesome/free-solid-svg-icons';
import styles from './Navbar.module.scss';

const Navbar = () => (
  <nav className={styles.Navbar}>
    <a id={styles.homeButton} className={styles.navBtn} href="https://google.com"><FontAwesomeIcon icon={faHome} label="homeButton" /></a>
    <a id={styles.messageButton} className={styles.navBtn} href="https://google.com"><FontAwesomeIcon icon={faComments} label="messageButton" /></a>
    <a id={styles.profileButton} className={styles.navBtn} href="https://google.com"><FontAwesomeIcon icon={faUserCircle} label="profileButton" /></a>
  </nav>
);

export default Navbar;
