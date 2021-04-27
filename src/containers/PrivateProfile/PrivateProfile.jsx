import React from 'react';
import PrivateProfileHeader from '../../components/PrivateProfileHeader';
import PrivateProfilePage from '../../components/PrivateProfilePage';

const PrivateProfile = (props) => {
  const { user, toggleIsEditing } = props;

  return (
    <>
      <PrivateProfileHeader user={user} toggleIsEditing={toggleIsEditing} />
      <PrivateProfilePage user={user} />
    </>
  );
};

export default PrivateProfile;
