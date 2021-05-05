import React from "react";
import { render } from "@testing-library/react";
import AddForm from "./AddForm";

describe("AddForm tests", () => {
  it("should render", () => {
    expect(render(<AddForm />)).toBeTruthy();
  });
});