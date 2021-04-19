import { React, useState } from 'react';
import DisplayProfileInfo from '../DisplayProfileInfo';

// import styles from './PrivateProfilePage.module.scss';

const EditProfile = ({ user }) => {
  const [isEditing, setIsEditing] = useState(true);
  console.log(setIsEditing);

  return (
    <>
      {isEditing && <DisplayProfileInfo user={user} />}
    </>
  );
};

export default EditProfile;
