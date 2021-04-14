import React from 'react';

const ProfileScreen = (props) => {
  const { strImage } = props;

  return (
    <section>
      <img src={strImage} alt="jumper" />
    </section>
  );
};

export default ProfileScreen;
