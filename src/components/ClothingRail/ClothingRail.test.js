import ClothingRail from './ClothingRail';
import Button from '../Button';
import { shallow } from 'enzyme';
import users from '../../resources/data/users';
import uniData from '../../resources/data/university-data';

describe('ClothingRail tests', () => {

  let component;
  
  beforeEach(() => {
    component = shallow(<ClothingRail user={users[0]} uniData={uniData[0]}  />);
  });

  it('should render buttons', () => {
    expect(component.find(Button)).toBeTruthy();
  });

  it('should add correct item to the like page', () => {
    expect(component.props().user.likes.length).toBe(0);

    const button = component.find(Button);
    button.find('button').at(0).simulate('click');

    expect(component.props().user.likes.length).toBe(1);

  })
});
