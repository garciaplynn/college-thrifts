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
  })
});
