import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUserCircle, faComments } from '@fortawesome/free-solid-svg-icons';
// import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
// import { faComments } from '@fortawesome/free-solid-svg-icons';
import styles from './Navbar.module.scss';
// import ReactDOM from 'react-dom';

const Navbar = () => (
  <nav className={styles.navBar}>
    <a id={styles.homeButton} className={styles.navbtn} href="https://google.com"><FontAwesomeIcon icon={faHome} label="homeButton" /></a>
    <a type="button" id={styles.messageButton} className={styles.navbtn} href="https://google.com"><FontAwesomeIcon icon={faComments} label="messageButton" /></a>
    <a type="button" id={styles.profileButton} className={styles.navbtn} href="https://google.com"><FontAwesomeIcon icon={faUserCircle} label="profileButton" /></a>
  </nav>
);

export default Navbar;
