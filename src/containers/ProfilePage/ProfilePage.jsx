import React, { useState } from 'react';
import ProfileTop from '../../components/ProfileTop';
import ProfileBottom from '../../components/ProfileBottom';
import ProfilePopup from '../../components/ProfilePopup';
import styles from './ProfilePage.module.scss';

const ProfilePage = (props) => {
  const { user, uni, clothingItem } = props;
  const [clickedItemId, setClickedItemId] = useState(false);

  return (
    <>
      {!clickedItemId ? null : (
        <div
          className={styles.popupContainer}
          role="button"
          tabIndex="-1"
          onKeyDown={(event) => {
            if (event.key === 'Escape') {
              setClickedItemId(false);
            }
          }}
          onClick={() => {
            setClickedItemId(false);
          }}
        >
          <ProfilePopup clickedItemId={clickedItemId} setClickedItemId={setClickedItemId} />
        </div>
      )}
      <ProfileTop user={user} uni={uni} />
      <ProfileBottom user={user} clothingItem={clothingItem} setClickedItemId={setClickedItemId} />
    </>
  );
};

export default ProfilePage;
