import { React, useState } from 'react';
import PrivateProfileHeader from '../PrivateProfileHeader';
import DisplayProfileInfo from '../DisplayProfileInfo';
import EditProfileInfo from '../EditProfileInfo';

import styles from './PrivateProfilePage.module.scss';

const EditProfile = ({ user }) => {
  const [isEditing, setIsEditing] = useState(false);

  const toggleIsEditing = () => {
    setIsEditing(!isEditing);
  };

  return (
    <article className={styles.container}>
      <PrivateProfileHeader user={user} />
      {!isEditing && <DisplayProfileInfo user={user} toggleIsEditing={toggleIsEditing} />}
      {isEditing && <EditProfileInfo user={user} toggleIsEditing={toggleIsEditing} />}
    </article>
  );
};

export default EditProfile;
