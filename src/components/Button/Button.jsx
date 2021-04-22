import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Button.module.scss';

const Button = ({ handleLike }) => (
  <div className={styles.faButton}>
    <button className={styles.thumbsUp} type="button" aria-label="thumbsup" onClick={handleLike}><FontAwesomeIcon icon="thumbs-up" /></button>
    <button className={styles.heart} type="button" aria-label="heart"><FontAwesomeIcon icon="heart" /></button>
  </div>
);
export default Button;
