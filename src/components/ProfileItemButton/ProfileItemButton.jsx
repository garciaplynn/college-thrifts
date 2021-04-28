import React from 'react';
// import styles from './ProfileItemButton.module.scss';

const ProfileItemButton = (props) => {
  const { setClickedItemId, item } = props;

  return (
    <>
      <button type="button" onClick={() => setClickedItemId(item.id)}>
        <img
          src={item.strImage}
          alt={item.strType}
        />
      </button>
    </>
  );
};

export default ProfileItemButton;
