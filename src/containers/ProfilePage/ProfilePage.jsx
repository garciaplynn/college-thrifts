import React from 'react';
import ProfileTop from '../../components/ProfileTop';
import ProfileBottom from '../../components/ProfileBottom';

const ProfilePage = (props) => {
  const { user, uni, clothingItem } = props;
  return (
    <>
      <ProfileTop user={user} uni={uni} />
      <ProfileBottom user={user} clothingItem={clothingItem} />
    </>
  );
};

export default ProfilePage;
