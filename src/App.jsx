import React from 'react';
// import ClothingRailCard from './components/ClothingRailCard';
import ClothingRail from './containers/ClothingRail';
import users from './resources/data/users';
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
    <Navbar />
  </>
);

export default App;
