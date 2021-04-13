import React from 'react';

const EditProfile = ({ user }) => {
  const { name, university, classOf } = user;
  const year = String(classOf).slice(2);
  return (
    <>
      <header>
        {/* IMG COMPONENT WILL GO HERE */}
        <h2>Profile</h2>
        <h3>{name}</h3>
        <p>{`${university.name} ${university.abbreviation} '${year}`}</p>
      </header>
      <section>
        <h3>About</h3>
      </section>
    </>
  );
};

export default EditProfile;
