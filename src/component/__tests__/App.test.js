import React from "react";
import enzyme, { shallow, mount } from "enzyme";
import App from "./../App";

import Adapter from "enzyme-adapter-react-16";
enzyme.configure({ adapter: new Adapter() });

const app = shallow(<App />);
test("render App", () => {
  expect(app).toBeDefined();
});
