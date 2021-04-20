import React from 'react';
// import ClothingRailCard from './components/ClothingRailCard';
import ClothingRail from './containers/ClothingRail';
import users from './resources/data/users';
import './data/fa-library';
<<<<<<< HEAD
import EditProfile from './components/EditProfile';
import Navbar from './components/Navbar';
// import uniData from './resources/data/university-data';

const App = () => (
  <>
    {/* <ClothingRailCard uniData={uniData[1]} />
    <ClothingRailCard uniData={uniData[2]} />
    <ClothingRailCard uniData={uniData[3]} /> */}
    {/* <ClothingRailCard uniData={uniData[4]} /> */}
    <ClothingRail />
    <EditProfile user={users[0]} />
    {/* <ProfileTop user={users[0]} uni={uniData[2]} /> */}
=======
import PrivateProfilePage from './components/PrivateProfilePage';
import ClothingCard from './components/ClothingCard';
import fakeClothingData from './resources/data/fake-data';
import Navbar from './components/Navbar';
import ProfileBottom from './components/ProfileScreen';
import uniData from './resources/data/university-data';
import ProfileTop from './components/ProfileTop';
import Button from './components/Button';

const App = () => (
  <>
    <ClothingRail uniData={uniData[1]} />
    <Button />
    <ClothingCard clothingItem={fakeClothingData[0]} />
    <PrivateProfilePage user={users[0]} />
    <ProfileTop user={users[0]} uni={uniData[2]} />
    <ProfileBottom clothingItem={fakeClothingData[0]} />
>>>>>>> 6ba39656230e401d6623a874a26e708f1767f9f6
    <Navbar />
  </>
);

export default App;
