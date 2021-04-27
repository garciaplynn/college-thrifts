import React from 'react';
import { render } from "@testing-library/react";
import PrivateProfile from "./PrivateProfile";
import users from '../../resources/data/users';
// import PrivateProfilePage from '../'
import { shallow } from 'enzyme';

describe("PrivateProfile tests", () => {
<<<<<<< HEAD
  it("should render", () => {
    expect(render(<PrivateProfile user={user} toggleIsEditing={toggleIsEditing} />)).toBeTruthy();
=======
  it('should render', () => {
    const mockFunction = jest.fn();
    expect(render(<PrivateProfile user={users[0]} toggleIsEditing={mockFunction} />)).toBeTruthy();
>>>>>>> 8e76da41f878a753ee7e9e2002a4f199cc9409c9
  });

});

