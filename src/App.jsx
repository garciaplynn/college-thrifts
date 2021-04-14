import React from 'react';

import users from './resources/data/users';
import EditProfile from './components/EditProfile';
import ClothingCard from './components/ClothingCard';
import fakeClothingData from './resources/data/fake-data';
import Navbar from './components/Navbar';

const App = () => (
  <>
    <ClothingCard clothingItem={fakeClothingData[0]} />
    <EditProfile user={users[0]} />
    <Navbar />
  </>
);

export default App;
