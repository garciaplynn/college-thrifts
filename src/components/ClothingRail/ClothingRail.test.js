import ClothingRail from './ClothingRail';
import Button from '../Button';
import { shallow, mount } from 'enzyme';
import users from '../../resources/data/users';
import uniData from '../../resources/data/university-data';

describe('Like button tests', () => {

  let component;
  
  beforeEach(() => {
    component = mount(<ClothingRail user={users[0]} uniData={uniData[0]} />);
  });

  it('should render buttons', () => {
    expect(component.find(Button)).toBeTruthy();
  });

  it('should add correct item to the like page', () => {
    expect(users[0].likes.length).toBe(0);
    component.find(Button).find('button').at(0).simulate('click');
    expect(users[0].likes.length).toBe(1);
  });
});

describe('University Name tests', () => {
  let component;

  beforeEach(() => {
    component = shallow(<ClothingRail user={users[0]} uniData={uniData[0]} />);
  });

  it('should render a title', () => {
    expect(component.find('h2')).toBeTruthy();
  });

  it('should match the university name with the header', () => {
    expect(component.find('h2').text()).toBe('University of Florida');
  });
})