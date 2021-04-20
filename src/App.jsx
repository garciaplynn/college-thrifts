import React from 'react';
// import ClothingRailCard from './components/ClothingRailCard';
import ClothingRail from './containers/ClothingRail';
// import users from './resources/data/users';
import './data/fa-library';
<<<<<<< HEAD
import PrivateProfilePage from './components/PrivateProfilePage';
import ClothingCard from './components/ClothingCard';
import fakeClothingData from './resources/data/fake-data';
import Navbar from './components/Navbar';
import ProfileBottom from './components/ProfileScreen';
import uniData from './resources/data/university-data';
import ProfileTop from './components/ProfileTop';
=======
// import PrivateProfilePage from './components/PrivateProfilePage';
// import ClothingCard from './components/ClothingCard';
// import fakeClothingData from './resources/data/fake-data';
import Navbar from './components/Navbar';
// import ProfileBottom from './components/ProfileScreen';
// import uniData from './resources/data/university-data';
// import ProfileTop from './components/ProfileTop';
>>>>>>> 88497915a3f4728eb23da645d9e212763673c80b
import Button from './components/Button';

const App = () => (
  <>
    <ClothingRail />
    <Button />
<<<<<<< HEAD
    <ClothingCard clothingItem={fakeClothingData[0]} />
    <PrivateProfilePage user={users[0]} />
    <ProfileTop user={users[0]} uni={uniData[2]} />
    <ProfileBottom clothingItem={fakeClothingData[0]} />
=======
    {/* <ClothingCard clothingItem={fakeClothingData[0]} /> */}
    {/* <PrivateProfilePage user={users[0]} /> */}
    {/* <ProfileTop user={users[0]} uni={uniData[2]} /> */}
    {/* <ProfileBottom clothingItem={fakeClothingData[0]} /> */}
>>>>>>> 88497915a3f4728eb23da645d9e212763673c80b
    <Navbar />
  </>
);

export default App;
