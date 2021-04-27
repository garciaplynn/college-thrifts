import React from 'react';
import EditProfileInfo from './EditProfileInfo';
import { shallow } from 'enzyme';

import users from '../../resources/data/users';

describe('EditProfileInfo tests', () => {
  let component;

  beforeEach(() => {
    component = shallow(<EditProfileInfo user={users[0]} />);
  });

  it('should render', () => {
    expect(component).toBeTruthy();
  });

  it('should render input elements', () => {
    expect(component.find('input').length).toBe(2);
  });

  it("should set the value of the first input to be the user's name", () => {
    expect(component.find('input').at(0).prop('value')).toBe('Tim Starr');
  });

  it("should set the value of the second input to be the user's email", () => {
    expect(component.find('input').at(1).prop('value')).toBe(
      'timstarr14@gmail.com'
    );
  });

  it('should change the input when the value is changed', () => {
    component
      .find('input')
      .at(0)
      .simulate('change', { target: { name: 'name', value: 'Charlie Dodds' } });
      expect(component.find('input').at(0).prop('value')).toBe('Charlie Dodds');
  });

  it('should change the input when the value is changed', () => {
    component
      .find('input')
      .at(1)
      .simulate('change', { target: { name: 'email', value: 'charliedodds@gmail.com' } });
      expect(component.find('input').at(1).prop('value')).toBe('charliedodds@gmail.com');
  });
});
