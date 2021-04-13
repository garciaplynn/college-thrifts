import React from 'react';
import './App.css';
import ClothingCard from './components/ClothingCard';

import fakeClothingData from './resources/data/fake-data';

const App = () => (<ClothingCard clothingItem={fakeClothingData[0]} />);

export default App;
