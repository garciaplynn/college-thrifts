import React, { Component } from 'react';
import { render } from '@testing-library/react';
import ProfileBottom from './ProfileBottom';
import { shallow } from 'enzyme';
import uniData from '../../resources/data/university-data'; 
import users from '../../resources/data/users';

describe("profile bottom tests", () => {
  let component;

  beforeEach(() => {
    component = shallow(<ProfileBottom user={users[0]} />);
  });

  it("should render no images if the array is empty on likes", () => {
    expect(component.find('div').at(0).children().length).toBe(0);
  });

  it("should have 3 clothing items in the selling array", () => {
    expect(component.find('div').at(1).children().length).toBe(3);
  });
});