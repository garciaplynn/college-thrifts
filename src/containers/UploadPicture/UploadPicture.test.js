import React from "react";
import { render } from "@testing-library/react";
import UploadPicture from "./UploadPicture";

describe("UploadPicture tests", () => {
  it("should render", () => {
    expect(render(<UploadPicture />)).toBeTruthy();
  });
});
