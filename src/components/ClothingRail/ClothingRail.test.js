import ClothingRail from './ClothingRail';
import Button from '../Button';
import { shallow } from 'enzyme';

describe('ClothingRail tests', () => {

  let component;
  
  beforeEach(() => {
    component = shallow(<ClothingRail />);
  });

  it('should render buttons', () => {
    expect(component.find(Button)).toBeTruthy();
  });
});
