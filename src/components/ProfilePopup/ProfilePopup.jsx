import React from 'react';
import fakeData from '../../resources/data/fake-data';
// import styles from "./ProfilePopup.module.scss";

const ProfilePopup = (props) => {
  const { clickedItemId } = props;
  console.log(clickedItemId);

  const itemToDisplay = fakeData.filter((item) => item.id === clickedItemId);
  console.log(itemToDisplay);

  return (
    <>
      <p>ProfilePopup works</p>
    </>
  );
};

export default ProfilePopup;
