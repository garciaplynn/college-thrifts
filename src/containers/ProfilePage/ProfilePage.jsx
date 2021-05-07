import React, { useState, useEffect } from 'react';
import ProfileTop from '../../components/ProfileTop';
import ProfileBottom from '../../components/ProfileBottom';
import ProfilePopup from '../../components/ProfilePopup';
import styles from './ProfilePage.module.scss';

const ProfilePage = (props) => {
  const {
    user,
    uni,
    clothingItem,
    setActivePage,
  } = props;

  const [clickedItemId, setClickedItemId] = useState(false);

  useEffect(() => {
    setActivePage('profile');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
