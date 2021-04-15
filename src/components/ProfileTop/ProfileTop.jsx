import React from 'react';

import GradientHeader from '../GradientHeader';

import styles from './ProfileTop.module.scss';

const ProfileTop = ({ uni }) => (
  <article className={styles.ProfileTop}>
    <h2>Profile</h2>
    <GradientHeader uni={uni} />
    <img src="https://s3-alpha-sig.figma.com/img/6119/2ef1/506e606237f37ada0168eb311d22d9b3?Expires=1619395200&Signature=Ht2Z10FZCjgcMbSvCNWm2ciDQCo2Ew3VAHkghMK0bsnFpHWjlXL62vx9HYtn1ZwVqbnd2TUWTg3VAC8q9TqbvE3qK-~KC99lmTRK~L-382x8K4cMaqEizNHSxZUT6vU09bUjvHKLTdAYet6v3Euuf3APStMN4EcCMA7Lcsl67zZAAKWVe49raduJ06BqLWZZCIHdQJ2M-PtYGB4MC3~~SVvDeQ6L7dyBDdv-LL2ffHgWW60zfNGiK5lVTsESN0DL4FVNbUhb5vhUFJJXSkxEpDs7IbtnE7I5yDVeK~KHf6pMgWDRUcmX8ahoNLu1diCLyc5O0EKwsOqKODLM6olZ4g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="University Logo" />

  </article>
);

export default ProfileTop;
