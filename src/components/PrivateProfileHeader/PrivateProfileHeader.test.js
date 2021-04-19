import React from "react";
import { render } from "@testing-library/react";
import PrivateProfileHeader from "./PrivateProfileHeader";

describe("PrivateProfileHeader tests", () => {
  it("should render", () => {
    expect(render(<PrivateProfileHeader />)).toBeTruthy();
  });
});
