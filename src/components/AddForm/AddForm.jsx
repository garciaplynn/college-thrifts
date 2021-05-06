/*eslint-disable */
import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './AddForm.modules.scss';

const AddForm = () => {
  const { register, handleSubmit, setValue } = useForm();

  React.useEffect(() => {
    register("uploads");
    setValue("uploads", [{ _id: "listing_file" }, { _id: "def_file" }]);
  }, [register, setValue]);

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    console.log(data)
  };

  return (
    <div className="formContainer">
      <h3 className="formHeading">Upload an item!</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="imageCheckboxes">
          <p className="categories">Image:</p>
          <input type="file" {...register("value_name")} />
        </div>
        <div className="genderCheckboxes">
          <p className="categories">Gender:</p>
          <label htmlFor="gender">
            <input
              type="checkbox"
              name="gender"
              value="mens"
              id="mens"
              {...register("value_name")}
            />
            Mens
          </label>
          <label htmlFor="gender">
            <input
              type="checkbox"
              name="gender"
              value="womens"
              id="womens"
              {...register("value_name")}
            />
            Womens
          </label>
        </div>
        <div className="conditionCheckboxes">
          <p className="categories">Condition:</p>
          <label htmlFor="new-with-tags">
            <input
              type="checkbox"
              name="condition"
              value="new-with-tags"
              id="new-with-tags"
              {...register("value_name")}
            />
            New with tags
          </label>
          <label htmlFor="as-new">
            <input
              type="checkbox"
              name="condition"
              value="as-new"
              id="as-new"
              {...register("value_name")}
            />
            As new
          </label>
          <label htmlFor="good">
            <input
              type="checkbox"
              name="condition"
              value="good"
              id="good"
              {...register("value_name")}
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
              {...register("value_name")}
            />
            Used
          </label>
          <label htmlFor="vintage">
            <input
              type="checkbox"
              name="condition"
              value="vintage"
              id="vintage"
              {...register("value_name")}
            />
            Vintage
          </label>
        </div>
        <div className="clothingCheckboxes">
          <p className="categories">Clothing Type:</p>
          <label htmlFor="clothing-type">
            <input
              className={styles.input}
              type="checkbox"
              name="clothing-type"
              value="crewneck"
              id="crewneck"
              {...register("value_name")}
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
              {...register("value_name")}
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
              {...register("value_name")}
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
              {...register("value_name")}
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
              {...register("value_name")}
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
              {...register("value_name")}
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
              {...register("value_name")}
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
              {...register("value_name")}
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
              {...register("value_name")}
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
              {...register("value_name")}
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
              {...register("value_name")}
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
              {...register("value_name")}
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
              {...register("value_name")}
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
              {...register("value_name")}
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
              {...register("value_name")}
            />
            Miscellaneous
          </label>
        </div>
        <div className="sizingCheckboxes">
          <p className="categories">Sizing:</p>
          <label htmlFor="sizing">
            <input
              type="checkbox"
              name="sizing"
              value="x-small"
              id="x-small"
              {...register("value_name")}
            />
            X-Small
          </label>
          <label htmlFor="sizing">
            <input
              type="checkbox"
              name="sizing"
              value="small"
              id="small"
              {...register("value_name")}
            />
            Small
          </label>
          <label htmlFor="sizing">
            <input
              type="checkbox"
              name="sizing"
              value="medium"
              id="medium"
              {...register("value_name")}
            />
            Medium
          </label>
          <label htmlFor="sizing">
            <input
              type="checkbox"
              name="sizing"
              value="large"
              id="large"
              {...register("value_name")}
            />
            Large
          </label>
          <label htmlFor="sizing">
            <input
              type="checkbox"
              name="sizing"
              value="x-large"
              id="x-large"
              {...register("value_name")}
            />
            X-Large
          </label>
          <label htmlFor="sizing">
            <input
              type="checkbox"
              name="sizing"
              value="oversized"
              id="oversized"
              {...register("value_name")}
            />
            Oversized
          </label>
        </div>
        <div className="pricingCheckboxes">
          <p className="categories">Price:</p>
          <label htmlFor="pricing">
            <input
              type="text"
              name="pricing"
              id="pricing"           
              placeholder="$0.00"             
            />
          </label>
        </div>
        <input className="button" type="submit" />
      </form>
      
    </div>
  );
};

export default AddForm;
