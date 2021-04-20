import React from "react";
import { render } from "@testing-library/react";
import CarbonFootprint from "./CarbonFootprint";

describe("CarbonFootprint tests", () => {
  it("should render", () => {
    expect(render(<CarbonFootprint />)).toBeTruthy();
  });
});
