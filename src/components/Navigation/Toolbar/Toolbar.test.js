import React from 'react';

import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import Toolbar from './Toolbar';
import NavigationItems from '../NavigationItems/NavigationItems';

configure({ adapter: new Adapter() });

describe('<NavigationItems />', () => {
  it('Should render zero <NavigationItems /> components if not authenticated', () => {
    const wrapper = shallow(<Toolbar />);
    expect(wrapper.find(NavigationItems)).toHaveLength(0);
  });
  it('Should render one <NavigationItems /> components if authenticated', () => {
    const wrapper = shallow(<Toolbar isLoggedIn />);
    expect(wrapper.find(NavigationItems)).toHaveLength(1);
  });
});
