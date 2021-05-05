import React from 'react';
import styles from './Error.module.scss';

const Error = (props) => {
  const { message } = props;
  return (
    <>
      <div className={styles.errorContainer}>
        <p>{message}</p>
      </div>
    </>
  );
};

export default Error;
