import React from 'react';
import styles from './GradientHeader.module.scss';

const GradientHeader = (props) => {
  const { title } = props;

  const getGradient = (initialColour, endColour) => `linear-gradient(180deg, ${initialColour} 0%, ${endColour} 100%)`;

  const headerStyle = {
    background: getGradient('#F4F4F4', '#000'),
  };

  return (
    <header style={headerStyle} className={styles.gradientHeader}>
      <h2>{title}</h2>
    </header>
  );
};

export default GradientHeader;
