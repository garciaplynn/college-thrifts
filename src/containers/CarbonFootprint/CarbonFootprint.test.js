import React from "react";
import { render } from "@testing-library/react";
import CarbonFootprint from "./CarbonFootprint";
import users from '../../resources/data/users';

describe("CarbonFootprint tests", () => {
  it("should render", () => {
    expect(render(<CarbonFootprint user={users[0]}/>)).toBeTruthy();
  });
});
