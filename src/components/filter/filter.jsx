import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Filter.module.scss';

const Filter = () => (
  <div className={styles.Filter}>
    <FontAwesomeIcon icon="sort-down" />
  </div>
);
export default Filter;
