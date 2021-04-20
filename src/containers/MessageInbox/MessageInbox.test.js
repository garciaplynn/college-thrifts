import React from "react";
import { render } from "@testing-library/react";
import MessageInbox from "./MessageInbox";

describe("MessageInbox tests", () => {
  it("should render", () => {
    expect(render(<MessageInbox />)).toBeTruthy();
  });
});
