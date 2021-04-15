import React from 'react';
//  import styles from './App.module.scss';
import './data/fa-library';

import ClothingCard from './components/ClothingCard';
import fakeClothingData from './resources/data/fake-data';
import styles from './components/ClothingCard/ClothingCard.module.scss';
import Navbar from './components/Navbar';
import Button from './components/Button';

const App = () => (
  <>
    <div className={styles.ClothingCards}>
      <ClothingCard clothingItem={fakeClothingData[0]} />
    </div>
    <Button />
    <Navbar />
  </>
);

export default App;
