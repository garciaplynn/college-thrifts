import App from './App';
import { shallow, mount } from 'enzyme';

describe("Navbar test", () => {
  let component;

  beforeEach(() => {
    component = mount(<App />);
  })

  it('should render', (done) => {
    expect(component).toBeTruthy();
    done();
  })

})