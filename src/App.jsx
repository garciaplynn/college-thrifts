import React from 'react';
// import ClothingRailCard from './components/ClothingRailCard';
import ClothingRail from './containers/ClothingRail';
// import users from './resources/data/users';
import './data/fa-library';
<<<<<<< HEAD
// import PrivateProfilePage from './components/PrivateProfilePage';
// import ClothingCard from './components/ClothingCard';
// import fakeClothingData from './resources/data/fake-data';
import Navbar from './components/Navbar';
// import ProfileBottom from './components/ProfileScreen';
// import uniData from './resources/data/university-data';
// import ProfileTop from './components/ProfileTop';
import Button from './components/Button';
=======
import PrivateProfilePage from './components/PrivateProfilePage';
import fakeClothingData from './resources/data/fake-data';
import Navbar from './components/Navbar';
import ProfileBottom from './components/ProfileScreen';
import uniData from './resources/data/university-data';
import ProfileTop from './components/ProfileTop';
>>>>>>> 9bfae1060119488fccbee843c35eafd83f78e329
import Routes from './containers/Routes';

const App = () => (
  <>
<<<<<<< HEAD
    <ClothingRail />
    <Button />
    {/* <ClothingCard clothingItem={fakeClothingData[0]} /> */}
    {/* <PrivateProfilePage user={users[0]} /> */}
    {/* <ProfileTop user={users[0]} uni={uniData[2]} /> */}
    {/* <ProfileBottom clothingItem={fakeClothingData[0]} /> */}
=======
    <ClothingRail user={users[0]} uniData={uniData[1]} />
    <PrivateProfilePage user={users[0]} />
    <ProfileTop user={users[0]} uni={uniData[2]} />
    <ProfileBottom clothingItem={fakeClothingData[0]} user={users[0]} />
>>>>>>> 9bfae1060119488fccbee843c35eafd83f78e329
    <Navbar />
    <Routes />
  </>
);

export default App;
