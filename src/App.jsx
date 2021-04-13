import React from 'react';
import './App.css';
import ClothingCard from './components/ClothingCard';
import fakeClothingData from './resources/data/fake-data';
import styles from './components/ClothingCard/ClothingCard.module.scss';
import Navbar from './components/Navbar';

const App = () => (
  <>
    <div className={styles.ClothingCards}>
     <ClothingCard clothingItem={fakeClothingData[0]} />
    </div>
    <Navbar />
  </>
);

export default App;
