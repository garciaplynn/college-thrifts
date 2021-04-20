import React from "react";
import { render } from "@testing-library/react";
import DisplayProfileInfo from "./DisplayProfileInfo";
import users from '../../resources/data/users';

describe("DisplayProfileInfo tests", () => {
  it("should render", () => {
    expect(render(<DisplayProfileInfo user={users[0]} />)).toBeTruthy();
  });
});
