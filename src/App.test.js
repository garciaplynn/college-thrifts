import App from './App';
import { shallow } from 'enzyme';
import ProfilePage from './containers/ProfilePage';

describe("Navbar test", () => {
  let component;

  beforeEach(() => {
    component = shallow(<App />);
  })

  it('should render', () => {
    expect(component).toBeTruthy();
  })

  it('should not render profile page by default', () => {
    expect(component.find(ProfilePage).exists).toBe(false);
  })

})