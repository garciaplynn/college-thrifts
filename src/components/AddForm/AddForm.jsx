import React from 'react';
import styles from './AddForm.modules.scss';

const AddForm = () => (
  <div>
    <h2>Choose file to upload</h2>
    <form method="post" encType="multipart/form-data">
      <div>
        <input
          className={styles.input}
          type="file"
          id="profile_pic"
          name="profile_pic"
          accept=".jpg, .jpeg, .png"
        />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  </div>
);

export default AddForm;
