import React from "react";
import { render } from "@testing-library/react";
import ProfileItemButton from "./ProfileItemButton";
import fakeData from "../../resources/data/fake-data";
import { shallow } from "enzyme";

describe("ProfileItemButton tests", () => {
  let component;

  beforeEach(() => {
    component = shallow(<ProfileItemButton item={fakeData[0]}/>)
  })

  it("should render", () => {
    expect(component).toBeTruthy();
  });
});
