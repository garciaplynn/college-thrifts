import React from "react";
import { shallow } from "enzyme";
import CarbonFootprint from "./CarbonFootprint";
import users from '../../resources/data/users';

describe("CarbonFootprint tests", () => {
  it("should render", () => {
    expect(shallow(<CarbonFootprint user={users[0]}/>)).toBeTruthy();
  });
});
