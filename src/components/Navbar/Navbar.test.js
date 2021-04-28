<<<<<<< HEAD
import React from "react";
import Navbar from "./Navbar";
import { shallow } from 'enzyme';

describe("Navbar tests", () => {
  let component;

  beforeEach(() => {
    component = shallow(<Navbar icon="" label=""/>);
  })

  it('should render', () => {
    expect(component).toBeTruthy();
  });

=======
import React from 'react';
import Navbar from './Navbar';
import { shallow } from 'enzyme';

describe('Navbar tests', () => {
  let component;
  beforeEach(() => {
    component = shallow(<Navbar icon='' label=''/>);
  })
  it('should render', () => {
    expect(component).toBeTruthy();
  })
>>>>>>> 4a70ae1d80f8d6424dd9045642db043c8bd628bc
});