import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import fakeData from '../../resources/data/fake-data';
import styles from './ProfilePopup.module.scss';

const ProfilePopup = (props) => {
  const { clickedItemId, setClickedItemId } = props;

  const itemToDisplay = fakeData.filter((item) => item.id === clickedItemId);

  return (
    <div className={styles.popup}>
      <button type="button" onClick={() => setClickedItemId(false)}>
        <FontAwesomeIcon icon="times-circle" className={styles.closeIcon} />
      </button>
      <img src={itemToDisplay[0].strImage} alt={itemToDisplay[0].strType} />
      <h3>{itemToDisplay[0].strType}</h3>
      <p>{itemToDisplay[0].strPrice}</p>
      <p>{itemToDisplay[0].strSize}</p>
    </div>
  );
};

export default ProfilePopup;
