import React from 'react';
import fakeData from '../../resources/data/fake-data';
import styles from './ProfilePopup.module.scss';

const ProfilePopup = (props) => {
  const { clickedItemId } = props;
  console.log(clickedItemId);

  const itemToDisplay = fakeData.filter((item) => item.id === clickedItemId);
  console.log(itemToDisplay);

  return (
    <div className={styles.popup}>
      <img src={itemToDisplay[0].strImage} alt={itemToDisplay[0].strType} />
      <h2>{itemToDisplay[0].strType}</h2>
      <p>{itemToDisplay[0].strPrice}</p>
      <p>{itemToDisplay[0].strSize}</p>
    </div>
  );
};

export default ProfilePopup;
