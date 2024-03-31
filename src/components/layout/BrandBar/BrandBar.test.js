import React from 'react';
import { shallow } from 'enzyme';
import BrandBar from './BrandBar';

describe('Component BrandBar', () => {
  it('should render without crashing', () => {
    const component = shallow(<BrandBar />);
    expect(component).toBeTruthy();
  });
});
