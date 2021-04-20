import React from "react";
import { render } from "@testing-library/react";
import EditProfileInfo from "./EditProfileInfo";

import users from '../../resources/data/users';

describe("EditProfileInfo tests", () => {
  it("should render", () => {
    expect(render(<EditProfileInfo user={users[0]} />)).toBeTruthy();
  });
});
