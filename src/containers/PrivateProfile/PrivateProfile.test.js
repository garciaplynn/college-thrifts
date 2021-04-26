import React from 'react';
import { render } from "@testing-library/react";
import PrivateProfile from "./PrivateProfile";
import users from '../../resources/data/users';
// import PrivateProfilePage from '../'
import { shallow } from 'enzyme';

describe("PrivateProfile tests", () => {
  it('should render', () => {
    const mockFunction = jest.fn();
    expect(render(<PrivateProfile user={users[0]} toggleIsEditing={mockFunction} />)).toBeTruthy();
  });

});
