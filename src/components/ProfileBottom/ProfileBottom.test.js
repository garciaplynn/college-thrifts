import React from 'react';
import ProfileBottom from './ProfileBottom';
import { shallow } from 'enzyme';
import users from '../../resources/data/users';
import firebase from "firebase";
describe("profile bottom tests", () => {
  const fetchPromise = Promise.resolve([{ id: 1 }]);
  jest.spyOn(firebase, "app").mockImplementation(() => ({
    firestore: () => ({
      collection: () => ({
        get: () => fetchPromise
      })
    })
  }));
  let component;
  beforeEach(() => {
    component = shallow(<ProfileBottom user={users[0]} />);
  });
  it("should render selling by default", () => {
    const syncComponent = component;
    const syncClothingImg = syncComponent.find('.ClothingImage');
    const syncChildren = syncClothingImg.children();
    const syncChildrenLength = syncChildren.length;
    expect(syncChildrenLength).toBe(0);
  });
});