import App from './App';
import { shallow, mount } from 'enzyme';

describe("Navbar test", () => {
  let component;

  beforeEach((done) => {
    component = mount(<App />);
    done();
  })
  afterAll((done) => {
    done();
  })

  it('should render', (done) => {
    expect(component).toBeTruthy();
    done();
  })

})