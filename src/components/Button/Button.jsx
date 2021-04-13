import React from 'react';
import styles from './Button.module.scss';

const Button = (props) => {
  const { icon } = props;

  return (
    <button className={styles.likeButton} type="button">{icon}</button>
  );
};
export default Button;
