import React from 'react';
import { Router } from '@reach/router';
import ClothingRail from '../ClothingRail';
import ProfilePage from '../ProfilePage';
import CarbonFootprint from '../CarbonFootprint';
import MessageInbox from '../MessageInbox';
import UploadPicture from '../UploadPicture';
import uniData from '../../resources/data/university-data';
import data from '../../resources/data/fake-data';
import PrivateProfilePage from '../../components/PrivateProfilePage';

const Routes = ({ user }) => (
  <Router>
    <ClothingRail path="/" uniArray={uniData} user={user} />
    <MessageInbox path="message-inbox" />
    <UploadPicture path="upload-picture" />
<<<<<<< HEAD
    <CarbonFootprint path="carbon-footprint" />
    <ProfilePage path="profile" user={user} uni={uniData[2]} clothingItem={data[0]} />
    <PrivateProfilePage path="profile/private-profile" user={user} />
=======
    <CarbonFootprint path="carbon-footprint" user={users[0]} />
    <ProfilePage path="profile" user={users[0]} uni={uniData[2]} clothingItem={data[0]} />
    <PrivateProfilePage path="profile/private-profile" user={users[0]} />
>>>>>>> f1c576c1b77f1c30f10088b7f0d5229b1802f4c0
  </Router>
);

export default Routes;
