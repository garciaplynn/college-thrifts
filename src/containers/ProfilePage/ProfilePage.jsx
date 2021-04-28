import React, { useState } from 'react';
import ProfileTop from '../../components/ProfileTop';
import ProfileBottom from '../../components/ProfileBottom';
import ProfilePopup from '../../components/ProfilePopup';

const ProfilePage = (props) => {
  const { user, uni, clothingItem } = props;
  const [clickedItemId, setClickedItemId] = useState(false);

  console.log(clickedItemId);

  return (
    <>
      <ProfilePopup clickedItemId={clickedItemId} />
      <ProfileTop user={user} uni={uni} />
      <ProfileBottom user={user} clothingItem={clothingItem} setClickedItemId={setClickedItemId} />
    </>
  );
};

export default ProfilePage;
