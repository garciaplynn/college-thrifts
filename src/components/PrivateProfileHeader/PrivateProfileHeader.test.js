import React from 'react';
import { render } from '@testing-library/react';
import PrivateProfileHeader from './PrivateProfileHeader';
import users from '../../resources/data/users';
import { shallow } from 'enzyme';

describe('PrivateProfileHeader tests', () => {
  let component;

  beforeEach(() => {
    component = shallow(<PrivateProfileHeader user={users[0]} />);
  });

  it('should display the correct image', () => {
    expect(component.find('img').prop('src')).toBe(
      'https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/1200px-SpongeBob_SquarePants_character.svg.png'
    );
  });

  it('should display the correct name', () => {
    expect(component.find('h3').at(0).text()).toBe('Tim Starr');
  });

  it('should display the university name, abbreviation and year of graduation', () => {
    expect(component.find('p').at(0).text()).toBe(
      "University of Miami (UM) '16"
    );
  });

  it('should render', () => {
    expect(component).toBeTruthy();
  });
});
