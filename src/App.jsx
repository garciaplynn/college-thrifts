import React from 'react';
import ClothingRail from './components/ClothingRail';
import users from './resources/data/users';
import EditProfile from './components/EditProfile';
import ClothingCard from './components/ClothingCard';
import fakeClothingData from './resources/data/fake-data';
import Navbar from './components/Navbar';
import uniData from './resources/data/university-data';
import ProfileTop from './components/ProfileTop';

const App = () => (
  <>
    <ClothingRail uniData={uniData[1]} />
    <ClothingCard clothingItem={fakeClothingData[0]} />
    <EditProfile user={users[0]} />
    <ProfileTop uni={uniData[2]} />
    <Navbar />
  </>
);

export default App;
