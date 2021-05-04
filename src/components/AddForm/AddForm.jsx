import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './AddForm.modules.scss';

const AddForm = () => {
  const [toggleAdd, setToggleAdd] = useState(false);
  // const [input, setInput] = useState(false);
  //  const [isChecked, setIsChecked] = useState(false);
  //  const [submit, setSubmit] = useState(false);
  //  const [details, setDetails] = useState('');
  const showContainer = toggleAdd ? styles.displayNone : styles.form;
  const uploader = () => {
    const image = document.getElementById('img-result');
    uploader.type = 'file';
    uploader.accept = 'image/*';
    image.onclick = function () {
      uploader.click();
    };
    uploader.onchange = function () {
      const reader = new FileReader();
      reader.onload = function (evt) {
        image.classList.remove('no-image');
        image.style.backgroundImage = 'url(' + evt.target.result + ')';
        const request = {
          itemtype: 'test 1',
          brand: 'test 2',
          images: [{
            data: evt.target.result,
          }],
        };
        document.querySelector('.show-button').style.display = 'block';
        document.querySelector('.upload-result__content').innerHTML = JSON.stringify(request, null, '  ');
      };
      reader.readAsDataURL(uploader.files[0]);
    };
    document.querySelector('.hide-button').onclick = function () {
      document.querySelector('.upload-result').style.display = 'none';
    };
    document.querySelector('.show-button').onclick = function () {
      document.querySelector('.upload-result').style.display = 'block';
    };
  };
  return (
    <div className={styles.addItem}>
      <FontAwesomeIcon
        icon="plus"
        className={styles.plus}
        toggleAdd={toggleAdd}
        onClick={() => setToggleAdd(!toggleAdd)}
        onKeyDown={toggleAdd.handleKeyDown}
        role="button"
        tabIndex="-1"
      />

      <div className={showContainer}>
        <button className={styles.noImage} id="img-result" type="submit">Upload Image</button>
      </div>
      <button className={styles.showButton} type="submit">Show server request</button>
      <div className={styles.uploadResult}>
        <button className={styles.hideButton} type="submit">Close</button>
        <pre className={styles.uploadResultContent}>
        </pre>
      </div>
    </div>
  );
};

export default AddForm;
