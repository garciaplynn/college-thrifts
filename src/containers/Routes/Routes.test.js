import React from "react";
import { render } from "@testing-library/react";
import Routes from "./Routes";
import { shallow } from 'enzyme'

describe("Routes tests", () => {
 let component;

 beforeEach(() => {
   component = shallow(<Routes />)
 })

  it("should render", () => {
    expect(component).toBeTruthy();
  })

});
