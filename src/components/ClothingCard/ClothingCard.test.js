import ClothingCard from "./ClothingCard";
import fakeData from "../../resources/data/fake-data";
import { shallow, mount } from "enzyme";

describe("Clothing Card tests", () => {
  let component;

  beforeEach(() => {
    component = shallow(<ClothingCard clothingItem={fakeData[0]} />);
    console.log(fakeData);
  });

  it("should render Clothing card", () => {
    expect(component).toBeTruthy();
  });

  it("should render the correct image", () => {
    expect(component.find("img").prop("strImage"));
  });

  it("It should render the price for the item", () => {
    expect(component.find("h2").prop("strPrice"));
  });

  it("Should render the size of the item", () => {
    expect(component.find('p').at(0).prop('strType'));
  })

  it("Should render the name of the item", () => {
    expect(component.find('h3').prop("strType"));
  })

  it("Should render the condition of the item", () => {
    expect(component.find('p').at(1).prop('strCondition'))
  })
});
