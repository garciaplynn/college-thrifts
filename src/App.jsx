import React from 'react';
// import GradientHeader from './components/GradientHeader';
// import styles from './App.module.scss';

// import ClothingCard from './components/ClothingCard';
// import fakeClothingData from './resources/data/fake-data';
// import clothingStyles from './components/ClothingCard/ClothingCard.module.scss';
import ClothingRail from './components/ClothingRail';
import Navbar from './components/Navbar';
import uniData from './resources/data/university-data';

const App = () => (
  <>
    {/* <div className={styles.headerContainer}>
      <GradientHeader uni={uniData[0]} />
    </div>
    <div className={clothingStyles.ClothingCards}>
      <ClothingCard clothingItem={fakeClothingData[0]} />
    </div> */}
    <ClothingRail uniData={uniData[1]} />
    <Navbar />
  </>
);

export default App;
