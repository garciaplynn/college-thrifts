import React from 'react';
import { shallow } from "enzyme";
import PrivateProfile from "./PrivateProfile";
import users from '../../resources/data/users';

describe("PrivateProfile tests", () => {
  it('should render', () => {
    const mockFunction = jest.fn();
    expect(shallow(<PrivateProfile user={users[0]} toggleIsEditing={mockFunction} />)).toBeTruthy();
  });

});

