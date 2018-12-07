import React from "react";
import enzyme, { shallow, mount } from "enzyme";
import Header from "./../Header";
import renderer from 'react-test-renderer';
import Adapter from "enzyme-adapter-react-16";
enzyme.configure({ adapter: new Adapter() });

const app = shallow(<Header />);
test("render Header", () => {
  expect(app).toBeDefined();
});

describe('<Header />', () => {
  const tree = renderer
  .create(<Header/>)
  .toJSON();
  it('Compare snapshot <Header />', () => {
  expect(tree).toMatchSnapshot();
  });

  it('Verify the <Header/> component snapshot elements', () => {
    expect(tree.type).toEqual("nav");
    });
});
