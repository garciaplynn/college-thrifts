import React from 'react';
import { Router } from '@reach/router';
import ClothingRail from '../../components/ClothingRail';
import users from '../../resources/data/users';
import ProfileTop from '../../components/ProfileTop';
import CarbonFootprint from '../CarbonFootprint';
import MessageInbox from '../MessageInbox';
import UploadPicture from '../UploadPicture';
import uniData from '../../resources/data/university-data';

const Routes = () => (
  <Router>
    <ClothingRail path="clothing-rail" uniData={uniData[1]} />
    <MessageInbox path="message-inbox" />
    <UploadPicture path="upload-picture" />
    <CarbonFootprint path="carbon-footprint" />
    <ProfileTop path="profile" user={users[0]} uni={uniData[2]} />
  </Router>
);

export default Routes;
