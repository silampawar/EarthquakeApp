import React from "react";
import enzyme, { shallow, mount } from "enzyme";
import EarthQuakeContainer from "./../EarthQuakeContainer";

import Adapter from "enzyme-adapter-react-16";
enzyme.configure({ adapter: new Adapter() });

const App = shallow(<EarthQuakeContainer />);
console.log(App);
test("render App", () => {
  expect(App).toBeDefined();
});
