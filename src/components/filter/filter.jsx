import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Filter.module.scss';

const Filter = () => (
  <div className={styles.Filter}>
    <FontAwesomeIcon icon="sort-down" />
    <form>
      <p className={styles.heading}>Gender:</p>
      <label htmlFor="mens">
        <input className={styles.input} type="checkbox" name="gender" value="mens" id="mens" />
        Mens
      </label>
      <label htmlFor="womens">
        <input className={styles.input} type="checkbox" name="gender" value="womens" id="womens" />
        Womens
      </label>
      <p className={styles.heading}>Condition</p>
      <label htmlFor="as-new">
        <input type="checkbox" name="condition" value="as-new" id="as-new" />
        As new
      </label>
      <label htmlFor="used">
        <input className={styles.input} type="checkbox" name="condition" value="used" id="used" />
        Used
      </label>
      <label htmlFor="vintage">
        <input type="checkbox" name="condition" value="vintage" id="vintage" />
        Vintage
      </label>
    </form>
  </div>
);
export default Filter;
