import React from 'react';
import { shallow } from 'enzyme';
import ProductCard from './ProductCard';

describe('Homepage', () => {
  it('renders without crashing', () => {
    const component = shallow(<ProductCard />);
    expect(component).toBeTruthy();
  });
});
