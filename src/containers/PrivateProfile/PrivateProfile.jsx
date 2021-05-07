import React, { useEffect } from 'react';
import PrivateProfileHeader from '../../components/PrivateProfileHeader';
import PrivateProfilePage from '../../components/PrivateProfilePage';

const PrivateProfile = (props) => {
  const { user, toggleIsEditing, setActivePage } = props;

  useEffect(() => {
    setActivePage('profilePage');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <PrivateProfileHeader user={user} toggleIsEditing={toggleIsEditing} />
      <PrivateProfilePage user={user} />
    </>
  );
};

export default PrivateProfile;
