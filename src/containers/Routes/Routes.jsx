import React from 'react';
import { Router } from '@reach/router';
// import ClothingRail from '../../components/ClothingRail';
import ProfileTop from '../../components/ProfileTop';
import CarbonFootprint from '../CarbonFootprint';
import MessageInbox from '../MessageInbox';
import UploadPicture from '../UploadPicture';
import Data from '../../data'

const Routes = () => (
  <Router>
    {/* <ClothingRail path="clothing-rail" /> */}
    <MessageInbox path="message-inbox" />
    <UploadPicture path="upload-picture" />
    <CarbonFootprint path="carbon-footprint" />
    <ProfileTop path="profile" />
  </Router>
);

export default Routes;
