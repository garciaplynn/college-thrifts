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

  it("It should render the correct name for the item", () => {
    expect(component.find("h2").prop("strPrice"));
  });
});
