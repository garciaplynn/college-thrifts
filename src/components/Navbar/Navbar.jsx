import React from "react";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return <nav>
    <a href="" className={styles.homeIcon}>home</a>
    <a href="" className={styles.profileIcon}>profile</a>
    <a href="" className={styles.messageIcon}>message</a>
  </nav>
};

export default Navbar;