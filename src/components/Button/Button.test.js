import React, { Component } from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe("button tests", () => {
  let component;

  beforeEach(() => {
    component = shallow(<Button />);
  });

  it("should render 1st button", () => {
    expect(component.find('button').at(0)).toBeTruthy();
  });

  it("should render 2nd button", () => {
    expect(component.find('button').at(1)).toBeTruthy();
  });

  it("should be able to click the first button", () => {
    component.find('button').at(0).simulate('click');
  });

  it("should be able to click the second button", () => {
    component.find('button').at(1).simulate('click');
  });

});
