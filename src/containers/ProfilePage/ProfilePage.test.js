import React from 'react';
import { render } from '@testing-library/react';
import ProfilePage from './ProfilePage';
import users from '../../resources/data/users';
import uniData from '../../resources/data/university-data';
import data from '../../resources/data/fake-data';




describe('ProfilePage tests', () => {
  it('should render', () => {
    expect(render(<ProfilePage user={users[0]} uni={uniData[2]} clothingItem={data[0]} />)).toBeTruthy();
  });
});

describe('render the popup on the page', () => {
  beforeEach(() => {
    componenet = mount(<Filter />)
  })

})