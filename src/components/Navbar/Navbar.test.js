import React from 'react';
import Navbar from './Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { shallow } from 'enzyme';

describe('Navbar tests', () => {
  let component;
  beforeEach(() => {
    component = shallow(<Navbar icon='' label=''/>);
  })
  it('should render', () => {
    expect(component).toBeTruthy();
  })

  it('has 5 icons in the navbar', () => {
    expect(component.find(FontAwesomeIcon).length).toBe(5);
  })

  it('must show tag icon for first icon', () => {
    expect(component.find(FontAwesomeIcon).at(0).prop('icon')).toBe('tag')
  })

  it('must show message icon for second icon', () => {
    expect(component.find(FontAwesomeIcon).at(1).prop('icon')).toBe('comments')
  })

  it('must show camera icon for third icon', () => {
    expect(component.find(FontAwesomeIcon).at(2).prop('icon')).toBe('camera')
  })

  it('must show globe icon for fourth icon', () => {
    expect(component.find(FontAwesomeIcon).at(3).prop('icon')).toBe('globe-americas')
  })

  it('must show profile icon for first icon', () => {
    expect(component.find(FontAwesomeIcon).at(4).prop('icon')).toBe('user-circle')
  })
});
