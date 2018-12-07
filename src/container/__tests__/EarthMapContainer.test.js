import React from "react";
import enzyme, { shallow, mount } from "enzyme";
import EarthMapContainer from "./../EarthMapContainer";

import Adapter from "enzyme-adapter-react-16";
import renderer from 'react-test-renderer';

enzyme.configure({ adapter: new Adapter() });
const App = shallow(<EarthMapContainer />).shallow();

it('renders correctly', () => {
  const tree = renderer
    .create(<EarthMapContainer />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders correctly with empty props', () => {
  const data = {Data:""};
  const tree = renderer
    .create(<EarthMapContainer quakes={data}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders correctly with div', () => {
const wrapper = shallow(<EarthMapContainer />);
expect(wrapper.find('div')).toBeDefined();
});

