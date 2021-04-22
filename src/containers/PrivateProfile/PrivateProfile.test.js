import React from "react";
import { render } from "@testing-library/react";
import PrivateProfile from "./PrivateProfile";

describe("PrivateProfile tests", () => {
  it("should render", () => {
    expect(render(<PrivateProfile />)).toBeTruthy();
  });
});
