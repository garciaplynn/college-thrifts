import ClothingRail from '../ClothingRail';
import { shallow } from 'enzyme';
import users from '../../resources/data/users';

describe("ClothingRail tests", () => {
  let component;

  beforeEach(() => {
    component = shallow(<ClothingRail user={users[0]} />);
  });

  it("should render", () => {
    expect(component).toBeTruthy();
  });
});