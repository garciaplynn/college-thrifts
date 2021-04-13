import React from 'react';

const EditProfile = ({ user }) => {
  const {
    name,
    university,
    classOf,
    email,
    following,
    followers,
    socials,
  } = user;
  const year = String(classOf).slice(2);
  return (
    <>
      <header>
        <section>
          {/* IMG COMPONENT WILL GO HERE */}
          <h2>Profile</h2>
          <h3>{name}</h3>
          <p>{`${university.name} ${university.abbreviation} '${year}`}</p>
        </section>

        <section>
          <a href="google.co.uk">Likes</a>
          <a href="google.co.uk">Selling</a>
        </section>
      </header>
      <section>
        <h3>About</h3>
        <h4>Full Name</h4>
        <p>{name}</p>
        <h4>Email</h4>
        <p>{email}</p>
        <h4>Following</h4>
        <p>{following}</p>
        <h4>Follower</h4>
        <p>{followers}</p>
        <h4>Social URL</h4>
        <ul>
          {socials.map((social) => (
            <li>{social.url}</li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default EditProfile;
