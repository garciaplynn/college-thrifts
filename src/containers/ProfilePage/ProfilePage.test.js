import React from 'react';
import { render } from '@testing-library/react';
import ProfilePage from './ProfilePage';
import users from '../../resources/data/users';
import uniData from '../../resources/data/university-data';
import data from '../../resources/data/fake-data';
import { mount } from 'enzyme';
import ProfilePopup from '../../components/ProfilePopup';
import fakeData from '../../resources/data/fake-data';




describe('ProfilePage tests', () => {
  it('should render', () => {
    expect(render(<ProfilePage user={users[0]} uni={uniData[2]} clothingItem={data[0]} />)).toBeTruthy();
  });
});

describe('Profile Item Popup test', () => {
  let component;

  beforeEach(() => {
    component = mount( <ProfilePopup fakeData={fakeData[0]}/>)
  })

  it("should render", () => {
    expect(component).toBeTruthy();
  });
})