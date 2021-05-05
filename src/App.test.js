import App from './App';
import { shallow } from 'enzyme';
import firebase from "firebase";
describe("Navbar test", () => {
  const fetchPromise = Promise.resolve([{ id: 1 }]);
  jest.spyOn(firebase, "app").mockImplementation(() => ({
    firestore: () => ({
      collection: () => ({
        get: () => fetchPromise
      })
    })
  }));
  let component;
  beforeEach(() => {
    component = shallow(<App />);
  })
  it('should render', () => {
    expect(component).toBeTruthy();
  })
})