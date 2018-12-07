import React from "react";
import enzyme, { shallow, mount } from "enzyme";
import Footer from "./../Footer";
import renderer from 'react-test-renderer';
import Adapter from "enzyme-adapter-react-16";
enzyme.configure({ adapter: new Adapter() });

const app = shallow(<Footer />);
test("render Footer", () => {
  expect(app).toBeDefined();
});

describe('<Footer />', () => {
  const tree = renderer
  .create(<Footer/>)
  .toJSON();
  it('Compare snapshot <Footer />', () => {
  expect(tree).toMatchSnapshot();
  });

  it('Verify the <Footer/> component snapshot elements', () => {
    expect(tree.type).toEqual("nav");
    });
});
