import React from 'react';
import styles from './GradientHeader.module.scss';

const GradientHeader = (props) => {
  const { uni } = props;
  const { colour1, colour2 } = uni;

  const getGradient = (initialColour, endColour) => `linear-gradient(180deg, ${initialColour} 0%, ${endColour} 100%)`;

  const headerStyle = {
    background: getGradient(colour1, colour2),
  };

  return <header style={headerStyle} className={styles.gradientHeader} />;
};

export default GradientHeader;
