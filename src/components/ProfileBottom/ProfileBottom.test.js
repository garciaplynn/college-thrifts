import React, { Component } from 'react';
import ProfileBottom from './ProfileBottom';
import { shallow } from 'enzyme';
import users from '../../resources/data/users';

describe("profile bottom tests", () => {
  let component;

  beforeEach(async () => {
    component = await shallow(<ProfileBottom user={users[0]} />);
  });

  it("should render selling by default", async (done) => {
    const asyncComponent = await component;
    const asyncClothingImg = await asyncComponent.find('.ClothingImage');
    const asyncChildren = await asyncClothingImg.children();
    const asyncChildrenLength = await asyncChildren.length;
    expect(asyncChildrenLength).toBe(0);
    done();
  });
});
