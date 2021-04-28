import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './FilterButton.module.scss';

const Filter = () => {
  const [isToggled, setIsToggled] = useState(true);
  const showContainer = isToggled ? styles.displayNone : styles.form;

  return (
    <section className={styles.container}>
      <div className={styles.Filter}>
        <FontAwesomeIcon
          icon="sort-down"
          className={styles.icon}
          isToggled={isToggled}
          onClick={() => setIsToggled(!isToggled)}
          onKeyDown={isToggled.handleKeyDown}
          role="button"
          tabIndex="-1"
        />
        <section className={styles.filterContainer}>
          <form className={showContainer}>
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
            <label htmlFor="new-with-tags">
              <input
                type="checkbox"
                name="condition"
                value="new-with-tags"
                id="new-with-tags"
              />
              New with tags
            </label>
            <label htmlFor="as-new">
              <input
                type="checkbox"
                name="condition"
                value="as-new"
                id="as-new"
              />
              As new
            </label>
            <label htmlFor="good">
              <input
                type="checkbox"
                name="condition"
                value="good"
                id="good"
              />
              Good
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
            <p className={styles.heading}>Type:</p>
            <label htmlFor="Type">
              <input
                className={styles.input}
                type="checkbox"
                name="Type"
                value="crewneck"
                id="crewneck"
              />
              Crewneck
            </label>
            <label htmlFor="Type">
              <input
                className={styles.input}
                type="checkbox"
                name="Type"
                value="hoodie"
                id="hoodie"
              />
              Hoodie
            </label>
            <label htmlFor="Type">
              <input
                className={styles.input}
                type="checkbox"
                name="Type"
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
            <label htmlFor="style">
              <input
                className={styles.input}
                type="checkbox"
                name="style"
                value="flag"
                id="flag"
              />
              Flag
            </label>
            <label htmlFor="style">
              <input
                className={styles.input}
                type="checkbox"
                name="style"
                value="footwear"
                id="footwear"
              />
              Footwear
            </label>
            <label htmlFor="style">
              <input
                className={styles.input}
                type="checkbox"
                name="style"
                value="headgear"
                id="headgear"
              />
              Headgear
            </label>
            <label htmlFor="style">
              <input
                className={styles.input}
                type="checkbox"
                name="style"
                value="longsleeve"
                id="longsleeve"
              />
              Longsleeve
            </label>
            <label htmlFor="style">
              <input
                className={styles.input}
                type="checkbox"
                name="style"
                value="shortsleeve"
                id="shortsleeve"
              />
              Shortsleeve
            </label>
            <label htmlFor="style">
              <input
                className={styles.input}
                type="checkbox"
                name="style"
                value="shorts"
                id="shorts"
              />
              Shorts
            </label>
            <label htmlFor="style">
              <input
                className={styles.input}
                type="checkbox"
                name="style"
                value="sporting-equipment"
                id="sporting-equipment"
              />
              Sporting equipment
            </label>
            <label htmlFor="style">
              <input
                className={styles.input}
                type="checkbox"
                name="style"
                value="tshirt"
                id="tshirt"
              />
              T-Shirt
            </label>
            <label htmlFor="style">
              <input
                className={styles.input}
                type="checkbox"
                name="style"
                value="tank-top"
                id="tank-top"
              />
              Tank top
            </label>
            <label htmlFor="style">
              <input
                className={styles.input}
                type="checkbox"
                name="style"
                value="zipped"
                id="zipped"
              />
              Zipped
            </label>
            <label htmlFor="style">
              <input
                className={styles.input}
                type="checkbox"
                name="style"
                value="miscallaneous"
                id="miscellaneous"
              />
              Miscellaneous
            </label>
            <p className={styles.heading}>Sizing:</p>
            <label htmlFor="sizing">
              <input
                type="checkbox"
                name="sizing"
                value="x-small"
                id="x-small"
              />
              X-small
            </label>
            <label htmlFor="sizing">
              <input
                type="checkbox"
                name="sizing"
                value="small"
                id="small"
              />
              Small
            </label>
            <label htmlFor="sizing">
              <input
                type="checkbox"
                name="sizing"
                value="medium"
                id="medium"
              />
              Medium
            </label>
            <label htmlFor="sizing">
              <input
                type="checkbox"
                name="sizing"
                value="large"
                id="large"
              />
              Large
            </label>
            <label htmlFor="sizing">
              <input
                type="checkbox"
                name="sizing"
                value="x-large"
                id="x-large"
              />
              X-Large
            </label>
            <label htmlFor="sizing">
              <input
                type="checkbox"
                name="sizing"
                value="oversized"
                id="oversized"
              />
              Oversized
            </label>
          </form>
        </section>
      </div>
    </section>
  );
};
export default Filter;
