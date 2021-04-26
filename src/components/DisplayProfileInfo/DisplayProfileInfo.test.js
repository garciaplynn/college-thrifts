import React from "react";
import { render } from "@testing-library/react";
import DisplayProfileInfo from "./DisplayProfileInfo";
import users from '../../resources/data/users';
import { mount } from 'enzyme';

describe("DisplayProfileInfo tests", () => {
  let component;

  beforeEach(() => {
    component = mount(<DisplayProfileInfo user={users[0]} />);
  });

  it('should render', () => {
    expect(component.find('p').at(0).text()).toBe('Tim Starr');
  });

  it('should render', () => {
    expect(component.find('p').at(2).text()).toBe('3 friends');
  });

  it('should render', () => {
    expect(component.find('p').at(3).text()).toBe('100000000 friends');
  });

  it('should render', () => {
    expect(component.find('li').at(0).text()).toBe('instagram.com/tim.starrr');
  });

  it("should render", () => {
    expect(render(<DisplayProfileInfo user={users[0]} />)).toBeTruthy();
  });
});
