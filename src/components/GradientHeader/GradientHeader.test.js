import React, { Component } from 'react';
import GradientHeader from './GradientHeader';
import { mount } from 'enzyme';
import uniData from '../../resources/data/university-data';

describe('gradient tests', () => {
  let component;

  beforeEach(() => {
    component = mount(<GradientHeader uni={uniData[0]} />);
  });

  it('should render', () => {
    expect(component.find('gradientHeader')).toBeTruthy();
  });

  it('should display two colours that match the university object', () => {
    expect(component.find('.gradientHeader').prop('style')).toEqual({
      background: 'linear-gradient(180deg, #005837 0%, #00A4D7 100%)',
    });
  });
});
