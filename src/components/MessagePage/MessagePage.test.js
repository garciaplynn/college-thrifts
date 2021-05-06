import React from "react";
import { render } from "@testing-library/react";
import MessagePage from "./MessagePage";

describe("MessagePage tests", () => {
  it("should render", () => {
    expect(render(<MessagePage />)).toBeTruthy();
  });
});
