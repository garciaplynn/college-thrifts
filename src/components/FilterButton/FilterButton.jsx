import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './FilterButton.module.scss';

const Filter = () => {
  const [isToggled, setisToggled] = useState(false);
  const  toggleFilter = () => {


  }
return (
  <section className={styles.container}>
    <div className={styles.Filter}>
      <FontAwesomeIcon icon="sort-down" className={styles.icon} />
      <form>
        <p className={styles.heading}>Gender:</p>
        <label htmlFor="mens">
          <input
            className={styles.input}
            type="checkbox"
            name="gender"
            value="mens"
            id="mens"
          />
          Mens
        </label>
        <label htmlFor="womens">
          <input
            className={styles.input}
            type="checkbox"
            name="gender"
            value="womens"
            id="womens"
          />
          Womens
        </label>
        <p className={styles.heading}>Condition:</p>
        <label htmlFor="as-new">
          <input type="checkbox" name="condition" value="as-new" id="as-new" />
          As new
        </label>
        <label htmlFor="used">
          <input
            className={styles.input}
            type="checkbox"
            name="condition"
            value="used"
            id="used"
          />
          Used
        </label>
        <label htmlFor="vintage">
          <input
            type="checkbox"
            name="condition"
            value="vintage"
            id="vintage"
          />
          Vintage
        </label>
        <p className={styles.heading}>Style:</p>
        <label htmlFor="style">
          <input
            className={styles.input}
            type="checkbox"
            name="style"
            value="crewneck"
            id="crewneck"
          />
          Crewneck
        </label>
        <label htmlFor="style">
          <input
            className={styles.input}
            type="checkbox"
            name="style"
            value="hoodie"
            id="hoodie"
          />
          Hoodie
        </label>
        <label htmlFor="style">
          <input
            className={styles.input}
            type="checkbox"
            name="style"
            value="jersey"
            id="jersey"
          />
          Jersey
        </label>
        <label htmlFor="style">
          <input
            className={styles.input}
            type="checkbox"
            name="style"
            value="jacket"
            id="jacket"
          />
          Jacket
        </label>
      </form>
    </div>
  </section>
);
};
export default Filter;
