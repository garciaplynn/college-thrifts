import React, { Component } from 'react';
import ProfileBottom from './ProfileBottom';
import { shallow, mount } from 'enzyme';
import users from '../../resources/data/users';

describe("profile bottom tests", () => {
  let component;

  beforeEach(() => {
    component = mount(<ProfileBottom user={users[0]} />);
  });

  it("should render selling by default", (done) => {
    const syncComponent = component;
    const syncClothingImg = syncComponent.find('.ClothingImage');
    const syncChildren = syncClothingImg.children();
    const syncChildrenLength = syncChildren.length;
    expect(syncChildrenLength).toBe(0);
    done();
  });
});
