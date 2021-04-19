import React from "react";
import { render } from "@testing-library/react";
import DisplayProfileInfo from "./DisplayProfileInfo";

describe("DisplayProfileInfo tests", () => {
  it("should render", () => {
    expect(render(<DisplayProfileInfo />)).toBeTruthy();
  });
});
