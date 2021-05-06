import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Error.module.scss';

const Error = ({ message, setError }) => (
  <section className={styles.errorContainer}>
    <p className={styles.errorMessage}>{message}</p>
    <button className={styles.cancelBtn} onClick={() => setError(null)} type="button" aria-label="cancel"><FontAwesomeIcon icon="times" /></button>
  </section>
);

export default Error;
