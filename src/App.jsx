import React from 'react';
<<<<<<< HEAD
//  import styles from './App.module.scss';
import {
  faHeart, faTimes, faHistory, faStar,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
=======

import ClothingCard from './components/ClothingCard';
import fakeClothingData from './resources/data/fake-data';
import styles from './components/ClothingCard/ClothingCard.module.scss';
>>>>>>> 53ee3fd55edcaee63540d4c5f0ebdb3c5cb5d45f
import Navbar from './components/Navbar';
import Button from './components/Button';

const App = () => (
  <>
    <div className={styles.ClothingCards}>
      <ClothingCard clothingItem={fakeClothingData[0]} />
    </div>
    <Navbar />
    <Button icon={<FontAwesomeIcon icon={faHeart} />} />
    <Button icon={<FontAwesomeIcon icon={faTimes} />} />
    <Button icon={<FontAwesomeIcon icon={faHistory} />} />
    <Button icon={<FontAwesomeIcon icon={faStar} />} />
  </>
);

export default App;
