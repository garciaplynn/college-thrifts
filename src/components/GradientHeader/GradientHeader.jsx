import React from 'react';
import styles from './GradientHeader.module.scss';

const GradientHeader = (props) => {
  const { uni } = props;
  const { color1, color2 } = uni;

  const getGradient = (initialColor, endColor) => `linear-gradient(180deg, ${initialColor} 0%, ${endColor} 100%)`;

  const headerStyle = {
    background: getGradient(color1, color2),
  };

  return (
    <>
      <header style={headerStyle} className={styles.gradientHeader} />
    </>
  );
};

export default GradientHeader;
