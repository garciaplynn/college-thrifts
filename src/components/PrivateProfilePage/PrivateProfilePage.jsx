import { React, useState } from 'react';
import PrivateProfileHeader from '../PrivateProfileHeader';
import DisplayProfileInfo from '../DisplayProfileInfo';
import EditProfileInfo from '../EditProfileInfo';

// import styles from './PrivateProfilePage.module.scss';

const EditProfile = ({ user }) => {
  const [isEditing, setIsEditing] = useState(false);

  const toggleIsEditing = () => {
    setIsEditing(!isEditing);
  };

  return (
    <section>
      <PrivateProfileHeader user={user} toggleIsEditing={toggleIsEditing} />
      {!isEditing && <DisplayProfileInfo user={user} />}
      {isEditing && <EditProfileInfo user={user} />}
    </section>
  );
};

export default EditProfile;
