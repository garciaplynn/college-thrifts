import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import fakeData from '../../resources/data/fake-data';
import styles from './ProfilePopup.module.scss';

const ProfilePopup = (props) => {
  const { clickedItemId, setClickedItemId } = props;

  const itemToDisplay = fakeData.filter((item) => item.id === clickedItemId);

  return (
    <div
      role="button"
      tabIndex="-1"
      className={styles.popup}
      onKeyDown={(e) => e.stopPropagation()}
      onClick={(e) => e.stopPropagation()}
    >
      <div className={styles.imgContainer}>
        <button type="button" onClick={() => setClickedItemId(false)}>
          <FontAwesomeIcon icon="times-circle" className={styles.closeIcon} />
        </button>
        <img src={itemToDisplay[0].strImage} alt={itemToDisplay[0].strType} />
      </div>
      <div>
        <div className={styles.titleContainer}>
          <h3>{itemToDisplay[0].strType}</h3>
          <h3>{itemToDisplay[0].strPrice}</h3>
        </div>
      </div>
      <div className={styles.belowContainer}>
        <div>
          <p>{`Size: ${itemToDisplay[0].strSize}`}</p>
          <p>
            {`Condition: ${itemToDisplay[0].strCondition}`}
          </p>
        </div>
        <button type="button">Message Seller</button>
      </div>
    </div>
  );
};

export default ProfilePopup;
