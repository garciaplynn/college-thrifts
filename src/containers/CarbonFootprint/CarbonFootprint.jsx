import React from 'react';
import GradientHeader from '../../components/GradientHeader';
import styles from './CarbonFootprint.module.scss';
// import '../../scss/abstracts/_variables';

const CarbonFootprint = (props) => {
  const { user } = props;
  const uni = {
    colour1: '#5db075',
    colour2: '#ffffff',
  };

  return (
    <div className={styles.carbonFootprint}>
      <h2>The Impact</h2>
      <GradientHeader uni={uni} />
      <div className={styles.logos}>
        <img src="https://png2.cleanpng.com/sh/b06d3056d59ded1cda46f47db1cd8606/L0KzQYm3VcI1N6JuR91yc4Pzfri0hfFzfJkyitdseXPvebBuTgN6dZN0hJ9sb33zhcXskr1zbZRAe95ybnewgL3okCRqa146eqIBOXHoRonsVcFmOV89T6UDNka3Q4K8UscyPWo6SqgAOEOxgLBu/kisspng-earth-recycling-symbol-computer-recycling-plastic-5b069ae68e51e1.873866431527159526583.png" alt="world" />
        <p>x</p>
        <img src={user.university.logo} alt="uni logo" />
      </div>
    </div>
  );
};

export default CarbonFootprint;
