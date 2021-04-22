import React from 'react';
import { Router } from '@reach/router';
import ClothingRail from '../../components/ClothingRail';
import users from '../../resources/data/users';
import ProfilePage from '../ProfilePage';
import CarbonFootprint from '../CarbonFootprint';
import MessageInbox from '../MessageInbox';
import UploadPicture from '../UploadPicture';
import uniData from '../../resources/data/university-data';
import data from '../../resources/data/fake-data';
import PrivateProfile from '../PrivateProfile';

const Routes = () => (
  <Router>
    <ClothingRail path="clothing-rail" uniData={uniData[1]} />
    <MessageInbox path="message-inbox" />
    <UploadPicture path="upload-picture" />
    <CarbonFootprint path="carbon-footprint" />
    <ProfilePage path="profile" user={users[0]} uni={uniData[2]} clothingItem={data[0]} />
    <PrivateProfile path="private-profile" />
  </Router>
);

export default Routes;
