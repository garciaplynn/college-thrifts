import React from 'react';
import ClothingRail from './components/ClothingRail';
import users from './resources/data/users';
import './data/fa-library';
import PrivateProfilePage from './components/PrivateProfilePage';
import ClothingCard from './components/ClothingCard';
import fakeClothingData from './resources/data/fake-data';
import Navbar from './components/Navbar';
import uniData from './resources/data/university-data';
import ProfileTop from './components/ProfileTop';
import Button from './components/Button';

const App = () => (
  <>
    <Button />
    <ClothingRail uniData={uniData[1]} />
    <ClothingCard clothingItem={fakeClothingData[0]} />
    <PrivateProfilePage user={users[0]} />
    <ProfileTop user={users[0]} uni={uniData[2]} />
    <Navbar />
  </>
);

export default App;
