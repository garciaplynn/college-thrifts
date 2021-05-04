import React from "react";
import { render } from "@testing-library/react";
import ProfilePopup from "./ProfilePopup";
import fakeData from '../../resources/data/fake-data';
import { shallow } from "enzyme";

describe("ProfilePopup tests", () => {
  let component;

  beforeEach(() => {
    component = shallow(<ProfilePopup fakeData={fakeData[0]} />);
  })

  it("should render", () => {
    expect(component).toBeTruthy();
  });

  it("should render the image", () => {
    expect(component.find("img")).toBeTruthy();
  });

  it("should render the title", () => {
    expect(component.find("h3").at(0)).toBeTruthy();
  });

  it("should render the price", () => {
    expect(component.find("h3").at(1)).toBeTruthy();
  });

  it("should render the size", () => {
    expect(component.find("p").at(0)).toBeTruthy();
  });

  it("should render the condition", () => {
    expect(component.find("p").at(1)).toBeTruthy();
  });
});
