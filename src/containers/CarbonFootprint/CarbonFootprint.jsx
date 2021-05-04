import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import GradientHeader from '../../components/GradientHeader';
import recycleimg from '../../resources/recycle world.png';
import styles from './CarbonFootprint.module.scss';
// import '../../scss/abstracts/_variables';

const CarbonFootprint = (props) => {
  const { user } = props;
  const uni = {
    colour1: '#5db075',
    colour2: '#ffffff',
  };

  return (
    <>
      <div className={styles.carbonFootprint}>
        <h2>The Impact</h2>
        <GradientHeader uni={uni} />
        <div className={styles.logos}>
          <img src={recycleimg} alt="world" />
          <p>x</p>
          <img src={user.university.logo} alt="uni logo" />
        </div>
        <h3>{`Congratulations, ${user.university.mascot}`}</h3>
        <FontAwesomeIcon icon="grin-stars" className={styles.smile} />
        <p> Here’s how much carbon YOU have saved through second hand shopping: </p>
        <p> 125 kg is equivalent to: </p>
        <p> Money saved over the last six months by upcycling </p>
      </div>
    </>
  );
};

export default CarbonFootprint;
