import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Button.module.scss';

const Button = () => (
  <div className={styles.faButton}>
    <button className={styles.times} type="button" aria-label="times"><FontAwesomeIcon icon="times" /></button>
    <button className={styles.star} type="button" aria-label="star"><FontAwesomeIcon icon="star" /></button>
    <button className={styles.heart} type="button" aria-label="heart"><FontAwesomeIcon icon="heart" /></button>
  </div>
);
export default Button;
