import React from 'react';
import uniData from '../../resources/data/university-data';
import ClothingRailCard from '../ClothingRailCard';

const ClothingRail = () => {
  const uniCards = uniData.map((uniClothingCard) => <ClothingRailCard uniData={uniClothingCard} />);
  return (
    <>
      {uniCards}
    </>
  );
};

export default ClothingRail;
