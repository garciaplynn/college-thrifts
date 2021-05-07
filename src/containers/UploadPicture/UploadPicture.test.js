import React from "react";
import { shallow } from "enzyme";
import UploadPicture from "./UploadPicture";

describe("UploadPicture tests", () => {
  it("should render", () => {
    expect(shallow(<UploadPicture />)).toBeTruthy();
  });
});
