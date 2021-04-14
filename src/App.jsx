import React from 'react';

import users from './resources/data/users';
import EditProfile from './components/EditProfile';
import ClothingCard from './components/ClothingCard';
import fakeClothingData from './resources/data/fake-data';
import Navbar from './components/Navbar';
import ProfileScreen from './components/ProfileScreen';

const App = () => (
  <>
    <ClothingCard clothingItem={fakeClothingData[0]} />
    <EditProfile user={users[0]} />
    <Navbar />
    <ProfileScreen clothingItem={fakeClothingData[0]} />
  </>
);

export default App;
