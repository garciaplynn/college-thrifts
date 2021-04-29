import React from "react";
import { render } from "@testing-library/react";
import ProfilePopup from "./ProfilePopup";
import { shallow } from "enzyme";

describe("ProfilePopup tests", () => {
  let component;

  beforeEach(() => {
    component = shallow(<ProfilePopup />);
  })

  it("should render", () => {
    expect(component).toBeTruthy();
  });
});
