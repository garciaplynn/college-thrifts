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

const Routes = ({ user, setActivePage }) => (
  <Router>
    <ClothingRail path="/" uniArray={uniData} user={user} setActivePage={setActivePage} />
    <MessageInbox path="message-inbox" setActivePage={setActivePage} />
    <UploadPicture path="upload-picture" setActivePage={setActivePage} />
    <CarbonFootprint path="carbon-footprint" user={user} setActivePage={setActivePage} />
    <ProfilePage path="profile" user={user} uni={uniData[2]} clothingItem={data[0]} setActivePage={setActivePage} />
    <PrivateProfilePage path="profile/private-profile" user={user} setActivePage={setActivePage} />
  </Router>
);

export default Routes;
