import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './AddForm.modules.scss';

const AddForm = () => {
  const [toggleAdd, setToggleAdd] = useState(false);
  const [isChecked, setIsChecked ] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [details, setDetails] = useState('');

const showContainer = toggleAdd ? styles.displayNone : styles.form;

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
    </div>

);
};

export default AddForm;