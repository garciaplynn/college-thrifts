 /* eslint-disable */
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from './AddForm.modules.scss';

const AddForm = () => {
  const [imageName, setImageName] = useState('');
  const [imageFile, setimageFile] = useState('');
  const [imageURL, setImageURL] = useState('');

  const changeImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageName(file.name);
      setimageFile(file);
      setImageURL(window.URL.createObjectURL(file));
      console.log(window.URL.createObjectURL(file));
    }
  };
  const { register, handleSubmit, setValue } = useForm();

  React.useEffect(() => {
    register('uploads');
    setValue('uploads', [{ _id: 'listing_file' }, { _id: 'def_file' }]);
  }, [register, setValue]);

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    console.log(data);
  };

  return (
    <div className="formContainer">
      <h3 className="formHeading">Upload an item!</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="imageCheckboxes">
          <p className="categories">Image:</p>
          <input
            type="file"
            accept="image"
            onInput={changeImage}
            {...register('image')}
          />
          <img
            className="item-listing"
            id="listing"
            name={imageName}
            src={imageURL}
            file={imageFile}
            alt="your listing"
          />
        </div>
        <div className="checkboxes">
          <p className="categories">Gender:</p>
          <label htmlFor="gender">
            <input
              type="checkbox"
              name="gender"
              value="mens"
              id="mens"
              {...register('gender')}
            />
            Mens
          </label>
          <label htmlFor="gender">
            <input
              type="checkbox"
              name="gender"
              value="womens"
              id="womens"
              {...register('gender')}
            />
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
              {...register('condition')}
            />
            New with tags
          </label>
          <label htmlFor="as-new">
            <input
              type="checkbox"
              name="condition"
              value="as-new"
              id="as-new"
              {...register('condition')}
            />
            As new
          </label>
          <label htmlFor="good">
            <input
              type="checkbox"
              name="condition"
              value="good"
              id="good"
              {...register('condition')}
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
              {...register('condition')}
            />
            Used
          </label>
          <label htmlFor="vintage">
            <input
              type="checkbox"
              name="condition"
              value="vintage"
              id="vintage"
              {...register('condition')}
            />
            Vintage
          </label>
        </div>
        <div className="checkboxes">
          <p className="categories">Clothing Type:</p>
          <label htmlFor="clothing">
            <input
              className={styles.input}
              type="checkbox"
              name="clothing-type"
              value="crewneck"
              id="crewneck"
              {...register('clothing')}
            />
            Crewneck
          </label>
          <label htmlFor="clothing">
            <input
              className={styles.input}
              type="checkbox"
              name="clothing-type"
              value="hoodie"
              id="hoodie"
              {...register('clothing')}
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
              {...register('clothing')}
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
              {...register('clothing')}
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
              {...register('clothing')}
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
              {...register('clothing')}
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
              {...register('clothing')}
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
              {...register('clothing')}
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
              {...register('clothing')}
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
              {...register('clothing')}
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
              {...register('clothing')}
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
              {...register('clothing')}
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
              {...register('clothing')}
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
              {...register('clothing')}
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
              {...register('clothing')}
            />
            Miscellaneous
          </label>
        </div>
        <div className="checkboxes">
          <p className="categories">Sizing:</p>
          <label htmlFor="sizing">
            <input
              type="checkbox"
              name="sizing"
              value="x-small"
              id="x-small"
              {...register('sizing')}
            />
            X-Small
          </label>
          <label htmlFor="sizing">
            <input
              type="checkbox"
              name="sizing"
              value="small"
              id="small"
              {...register('sizing')}
            />
            Small
          </label>
          <label htmlFor="sizing">
            <input
              type="checkbox"
              name="sizing"
              value="medium"
              id="medium"
              {...register('sizing')}
            />
            Medium
          </label>
          <label htmlFor="sizing">
            <input
              type="checkbox"
              name="sizing"
              value="large"
              id="large"
              {...register('sizing')}
            />
            Large
          </label>
          <label htmlFor="sizing">
            <input
              type="checkbox"
              name="sizing"
              value="x-large"
              id="x-large"
              {...register('sizing')}
            />
            X-Large
          </label>
          <label htmlFor="sizing">
            <input
              type="checkbox"
              name="sizing"
              value="oversized"
              id="oversized"
              {...register('sizing')}
            />
            Oversized
          </label>
        </div>
        <div className="pricingCheckboxes">
          <p className="categories">Price:</p>
          <label htmlFor="sizing">
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
