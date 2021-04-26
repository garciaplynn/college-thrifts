import ClothingCard from './ClothingCard';
import fakeData from '../../resources/data/fake-data';
import { shallow, mount } from 'enzyme';

describe('Clothing Card tests', () => {
  let component;


  beforeEach(() => {
    component = shallow(<ClothingCard clothingItem={fakeData[0]} />)
    console.log(fakeData)
  });

  it('should render Clothing card', () => {
    expect(component).toBeTruthy();
  });
});