import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Button.module.scss';

const Button = ({ swipeLeftHandler, swipeRightHandler, swipeUpHandler }) => (
  <div className={styles.faButton}>
    {/* <button
      className={styles.thumbsUp}
      type="button"
      aria-label="thumbsup"
    >
    <FontAwesomeIcon icon="thumbs-up" />
  </button> */}
    <button
      className={styles.chevron}
      type="button"
      aria-label="left"
      onClick={swipeLeftHandler}
    >
      <FontAwesomeIcon icon="chevron-left" />
    </button>
    <button
      className={styles.heart}
      type="button"
      aria-label="heart"
      onClick={swipeUpHandler}
    >
      <FontAwesomeIcon icon="heart" />
    </button>
    <button
      className={styles.chevron}
      type="button"
      aria-label="right"
      onClick={swipeRightHandler}
    >
      <FontAwesomeIcon icon="chevron-right" />
    </button>
  </div>
);
export default Button;
