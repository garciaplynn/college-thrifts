import React from "react";
import { render } from "@testing-library/react";
import EditProfileInfo from "./EditProfileInfo";

describe("EditProfileInfo tests", () => {
  it("should render", () => {
    expect(render(<EditProfileInfo />)).toBeTruthy();
  });
});
