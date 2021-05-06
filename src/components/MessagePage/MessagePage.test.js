import React from "react";
import { shallow } from "enzyme";
import MessagePage from "./MessagePage";

describe("MessagePage tests", () => {
  it("should render", () => {
    expect(shallow(<MessagePage />)).toBeTruthy();
  });
});
