import React, { Component } from 'react';
import ProfileBottom from './ProfileBottom';
import { shallow } from 'enzyme';
import users from '../../resources/data/users';

describe("profile bottom tests", () => {
  let component;

  beforeEach(() => {
    component = shallow(<ProfileBottom user={users[0]} />);
  });

  it("should render selling by default", async () => {
    const childrenLength = await component.find('.ClothingImage').children().length;
    expect(childrenLength).toBe(0)
  });
});
