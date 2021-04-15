import React from 'react';

import GradientHeader from '../GradientHeader';

import styles from './ProfileTop.module.scss';

const ProfileTop = ({ uni }) => (
  <article className={styles.ProfileTop}>
    <h2>Profile</h2>
    <GradientHeader uni={uni} />
  </article>
);

export default ProfileTop;
