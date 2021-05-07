import React from "react";
import { shallow } from "enzyme";
import MessageInbox from "./MessageInbox";

describe("MessageInbox tests", () => {
  it("should render", () => {
    expect(shallow(<MessageInbox />)).toBeTruthy();
  });
});
