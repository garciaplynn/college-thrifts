import React from "react";
import { render } from "@testing-library/react";
import ProfilePopup from "./ProfilePopup";

describe("ProfilePopup tests", () => {
  it("should render", () => {
    expect(render(<ProfilePopup />)).toBeTruthy();
  });
});
