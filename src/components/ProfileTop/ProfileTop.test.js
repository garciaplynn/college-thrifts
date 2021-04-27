import React, { Component } from 'react';
import { render } from '@testing-library/react';
import ProfileTop from './ProfileTop';
import { mount } from 'enzyme';
import uniData from '../../resources/data/university-data'; 
import users from '../../resources/data/users';

describe("profile top tests", () => {
  let component;
  let testForm = "Test form";

  beforeEach(() => {
    component = mount(<ProfileTop uni={uniData[0]} user={users[0]}/>)
  })

  it('should render', () => {
    expect(component.find('ProfileTop')).toBeTruthy();
  })
  it('should display a name on the page', () => {
   component.find('h3').prop('name');
  })
  it('should display whether or not it is a Greek university', () => {
    component.find('p').at(0).prop('greek');
  })

  it('should display the university name', () => {
    component.find('p').at(1).prop('name');
  })

  it('should display the university abbreviation', () => {
    component.find('p').at(1).prop('abbreviation');
  })

  it('should display the university year', () => {
    component.find('p').at(1).prop('year');
  })

})