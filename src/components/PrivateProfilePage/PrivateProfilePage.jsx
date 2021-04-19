import { React, useState } from 'react';
import PrivateProfileHeader from '../PrivateProfileHeader';
import DisplayProfileInfo from '../DisplayProfileInfo';
import EditProfileInfo from '../EditProfileInfo';

// import styles from './PrivateProfilePage.module.scss';

const EditProfile = ({ user }) => {
  const [isEditing, setIsEditing] = useState(true);

  const toggleIsEditing = () => {
    setIsEditing(!isEditing);
  };

  return (
    <>
      <PrivateProfileHeader user={user} />
      {!isEditing && <DisplayProfileInfo user={user} toggleIsEditing={toggleIsEditing} />}
      {isEditing && <EditProfileInfo user={user} toggleIsEditing={toggleIsEditing} />}
    </>
  );
};

export default EditProfile;
