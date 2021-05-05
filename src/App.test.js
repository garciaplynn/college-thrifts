import App from './App';
import { shallow } from 'enzyme';

describe("Navbar test", () => {
  let component;

  beforeEach(() => {
    component = shallow(<App />);
  })

  it('should render', (done) => {
    expect(component).toBeTruthy();
    done();
  })

})