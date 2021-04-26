import React, { Component } from 'react';
import { render } from "@testing-library/react";
import GradientHeader from './GradientHeader';
import { mount } from 'enzyme';
import uniData from '../../resources/data/university-data'; 

describe("gradient tests", () => {
  let component;
  let testForm = "Test form";

  beforeEach(() => {
    component = mount(<GradientHeader uni={uniData[0]} />)
  })

  it("should render", () => {
    expect(component.find('gradientHeader')).toBeTruthy();
  })

it ("should display two colours that match the university object", () => {
  expect(component.find('.gradientHeader').prop('style')).toEqual({'background': 'linear-gradient(180deg, #FA4616 0%, #0021A5 100%)'});
})
});
