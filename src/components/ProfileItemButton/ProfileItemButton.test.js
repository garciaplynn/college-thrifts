import React from "react";
import { render } from "@testing-library/react";
import ProfileItemButton from "./ProfileItemButton";

describe("ProfileItemButton tests", () => {
  it("should render", () => {
    expect(render(<ProfileItemButton />)).toBeTruthy();
  });
});
