import React from "react";
import { render } from "@testing-library/react";
import PrivateProfileHeader from "./PrivateProfileHeader";
import users from '../../resources/data/users';

describe("PrivateProfileHeader tests", () => {
  it("should render", () => {
    expect(render(<PrivateProfileHeader user={users[0]} />)).toBeTruthy();
  });
});
