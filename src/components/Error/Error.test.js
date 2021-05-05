import React from "react";
import { render } from "@testing-library/react";
import Error from "./Error";

describe("Error tests", () => {
  it("should render", () => {
    expect(render(<Error />)).toBeTruthy();
  });
});
