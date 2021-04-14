import React from 'react';
//  import styles from './App.module.scss';
import library from './data/fa-library';

import ClothingCard from './components/ClothingCard';
import fakeClothingData from './resources/data/fake-data';
import styles from './components/ClothingCard/ClothingCard.module.scss';
import Navbar from './components/Navbar';
import Button from './components/Button';

const App = () => (
  <>
    <Button />
    <div className={styles.ClothingCards}>
      <ClothingCard clothingItem={fakeClothingData[0]} />
    </div>
    <Navbar />
  </>
);

export default App;
