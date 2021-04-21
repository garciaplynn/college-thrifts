import React from 'react';
import ClothingRail from './components/ClothingRail';
import users from './resources/data/users';
import './data/fa-library';
import PrivateProfilePage from './components/PrivateProfilePage';
import fakeClothingData from './resources/data/fake-data';
import Navbar from './components/Navbar';
import ProfileBottom from './components/ProfileScreen';
import uniData from './resources/data/university-data';
import ProfileTop from './components/ProfileTop';
import Routes from './containers/Routes';

const App = () => (
  <>
    <ClothingRail user={users[0]} uniData={uniData[1]} />
    <PrivateProfilePage user={users[0]} />
    <ProfileTop user={users[0]} uni={uniData[2]} />
    <ProfileBottom clothingItem={fakeClothingData[0]} user={users[0]} />
    <Navbar />
    <Routes />
  </>
);

export default App;
