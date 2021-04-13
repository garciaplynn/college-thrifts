import React from 'react';
import styles from './Navbar.module.scss';

const Navbar = () => (
  <nav className={styles.navBar}>
    <a href="https://google.com">Home</a>
    <a href="https://google.com">Profile</a>
    <a href="https://google.com">Message</a>
  </nav>
);

export default Navbar;
