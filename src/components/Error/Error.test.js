import React from "react";
import { render } from "@testing-library/react";
import Error from "./Error";
import { shallow } from 'enzyme';


describe("Error tests", () => {
  let component;

  beforeEach(() => {
    component = shallow(<Error message='error'/>);
  });

  it("should render", () => {
    expect(render(<Error />)).toBeTruthy();
  });

  it("should display message prop", () => {
    expect(component.find('p').text()).toBe('error');
  })
});
