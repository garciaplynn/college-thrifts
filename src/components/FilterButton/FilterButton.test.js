import React, { Component } from 'react';
import { render } from "@testing-library/react";
import Filter from './FilterButton';
import { shallow } from 'enzyme';

describe("filter tests", () => {
  let component;
  let testForm = "Test form";

  beforeEach(() => {
    component = shallow( <Filter />)
  })

  it("should render", () => {
    expect(render(<Filter />)).toBeTruthy();
  });

  it("should display a form once the icon is clicked", () => {
    component.find('FontAwesomeIcon').simulate('click');
    expect(component.find('form')).toBeTruthy();
  });

  it('should display text for gender', () => {
    expect(component.find('p').at(0).text()).toBe('Gender:')
  });

  it('should display text for condition', () => {
    expect(component.find('p').at(1).text()).toBe('Condition:')
  });

  it('should display text for clothing type', () => {
    expect(component.find('p').at(2).text()).toBe('Clothing Type:')
  });

  it('should display text for sizing', () => {
    expect(component.find('p').at(3).text()).toBe('Sizing:')
  });

  it('should display the correct label', () => {
    expect(component.find('label').at(0).text()).toBe('Mens')
  });

  it('should display the correct label', () => {
    expect(component.find('label').at(1).text()).toBe('Womens')
  });

  it('should display the correct label', () => {
    expect(component.find('label').at(2).text()).toBe('New with tags')
  });

  it('should display the correct label', () => {
    expect(component.find('label').at(3).text()).toBe('As new')
  });

  it('should display the correct label', () => {
    expect(component.find('label').at(4).text()).toBe('Good')
  });

  it('should display the correct label', () => {
    expect(component.find('label').at(5).text()).toBe('Used')
  });

  it('should display the correct label', () => {
    expect(component.find('label').at(6).text()).toBe('Vintage')
  });

  it('should display the correct label', () => {
    expect(component.find('label').at(7).text()).toBe('Crewneck')
  });

  it('should display the correct label', () => {
    expect(component.find('label').at(8).text()).toBe('Hoodie')
  });

  it('should display the correct label', () => {
    expect(component.find('label').at(9).text()).toBe('Jersey')
  });

  it('should display the correct label', () => {
    expect(component.find('label').at(10).text()).toBe('Jacket')
  });

  it('should display the correct label', () => {
    expect(component.find('label').at(11).text()).toBe('Flag')
  });

  it('should display the correct label', () => {
    expect(component.find('label').at(12).text()).toBe('Footwear')
  });

  it('should display the correct label', () => {
    expect(component.find('label').at(13).text()).toBe('Headgear')
  });

  it('should display the correct label', () => {
    expect(component.find('label').at(14).text()).toBe('Longsleeve')
  });

  it('should display the correct label', () => {
    expect(component.find('label').at(15).text()).toBe('Shortsleeve')
  });

  it('should display the correct label', () => {
    expect(component.find('label').at(16).text()).toBe('Shorts')
  });

  it('should display the correct label', () => {
    expect(component.find('label').at(17).text()).toBe('Sporting equipment')
  });

  it('should display the correct label', () => {
    expect(component.find('label').at(18).text()).toBe('T-Shirt')
  });

  it('should display the correct label', () => {
    expect(component.find('label').at(19).text()).toBe('Tank top')
  });

  it('should display the correct label', () => {
    expect(component.find('label').at(20).text()).toBe('Zipped')
  });

  it('should display the correct label', () => {
    expect(component.find('label').at(21).text()).toBe('Miscellaneous')
  });

  it("should check the box when clicked", () => {
    component.find('input').at(0).simulate('click');
    expect(component.find('input').at(0)).toBeTruthy();
  });
});
