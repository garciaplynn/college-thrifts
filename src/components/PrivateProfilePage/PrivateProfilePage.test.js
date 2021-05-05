import React from "react";
import PrivateProfilePage from "./PrivateProfilePage";
import PrivateProfileHeader from '../PrivateProfileHeader';
import DisplayProfileInfo from '../DisplayProfileInfo';
import EditProfileInfo from '../EditProfileInfo';
import { mount } from 'enzyme';
import users from '../../resources/data/users';

describe("PrivateProfilePage tests", () => {
  let component;

  beforeEach(() => {
    component = mount(<PrivateProfilePage user={users[0]} />);
  });

  it("should render", () => {
    expect(component).toBeTruthy();
  });

  it('should render PrivateProfileHeader', () => {
    expect(component.find(PrivateProfileHeader)).toBeTruthy();
  })

  it('should render DisplayProfileInfo by default', () => {
    expect(component.find(DisplayProfileInfo)).toBeTruthy();
  })
  
  it('should render EditProfileInfo when edit profile button clicked', () => {
    // go into private profile header component and click on edit profile button
    component.find(DisplayProfileInfo).find('button').simulate('click');


    // check edit profile component is being rendered
    expect(component.find(EditProfileInfo)).toBeTruthy();
  });

});
