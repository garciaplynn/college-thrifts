import React from 'react';
import styles from './AddForm.modules.scss';

const AddForm = () => (
  <div className="formContainer">
    <h3 className="formHeading">Upload an item</h3>
    <form>
      <p className="categories">Image:</p>
      <input type="file" />
      <div className="genderCheckboxes">
        <p className="categories">Gender:</p>
        <label htmlFor="gender">
          <input type="checkbox" name="gender" value="mens" id="mens" />
          Mens
        </label>
        <label htmlFor="gender">
          <input type="checkbox" name="gender" value="womens" id="womens" />
          Womens
        </label>
      </div>
      <div className="checkboxes">
        <p className="categories">Condition:</p>
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
          <input type="checkbox" name="condition" value="as-new" id="as-new" />
          As new
        </label>
        <label htmlFor="good">
          <input type="checkbox" name="condition" value="good" id="good" />
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
      </div>
      <p className="categories">Clothing Type:</p>
      <label htmlFor="clothing-type">
        <input
          className={styles.input}
          type="checkbox"
          name="clothing-type"
          value="crewneck"
          id="crewneck"
        />
        Crewneck
      </label>
      <label htmlFor="clothing-type">
        <input
          className={styles.input}
          type="checkbox"
          name="clothing-type"
          value="hoodie"
          id="hoodie"
        />
        Hoodie
      </label>
      <label htmlFor="clothing-type">
        <input
          className={styles.input}
          type="checkbox"
          name="clothing-type"
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
      <p className="categories">Sizing:</p>
      <label htmlFor="sizing">
        <input type="checkbox" name="sizing" value="x-small" id="x-small" />
        X-Small
      </label>
      <label htmlFor="sizing">
        <input type="checkbox" name="sizing" value="small" id="small" />
        Small
      </label>
      <label htmlFor="sizing">
        <input type="checkbox" name="sizing" value="medium" id="medium" />
        Medium
      </label>
      <label htmlFor="sizing">
        <input type="checkbox" name="sizing" value="large" id="large" />
        Large
      </label>
      <label htmlFor="sizing">
        <input type="checkbox" name="sizing" value="x-large" id="x-large" />
        X-Large
      </label>
      <label htmlFor="sizing">
        <input type="checkbox" name="sizing" value="oversized" id="oversized" />
        Oversized
      </label>
      <p className="categories">Price:</p>
      <label htmlFor="pricing">
        <input type="text" name="pricing" id="pricing" placeholder="$.00" />
      </label>
    </form>
    <button type="submit">Submit</button>
  </div>
);

export default AddForm;
