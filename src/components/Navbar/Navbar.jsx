import React from 'react';
import styles from './Navbar.module.scss';

const Navbar = () => (
  <nav className={styles.navBar}>
    <button type="button" id={styles.homeButton}><a href="https://google.com">Home</a></button>
    <button type="button" id={styles.profileButton}><a href="https://google.com">Profile</a></button>
    <button type="button" id={styles.messageButton}><a href="https://google.com">Message</a></button>
  </nav>
);

export default Navbar;
