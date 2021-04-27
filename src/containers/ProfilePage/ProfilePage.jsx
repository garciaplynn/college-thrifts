import React, { useState } from 'react';
import ProfileTop from '../../components/ProfileTop';
import ProfileBottom from '../../components/ProfileBottom';
import ProfilePopup from '../../components/ProfilePopup';

const ProfilePage = (props) => {
  const { user, uni, clothingItem } = props;
  const [clicked, setClicked] = useState(false);

  console.log(clicked);

  return (
    <>
      <ProfileTop user={user} uni={uni} />
      <ProfileBottom user={user} clothingItem={clothingItem} clickedFunction={setClicked} />
    </>
  );
};

export default ProfilePage;
