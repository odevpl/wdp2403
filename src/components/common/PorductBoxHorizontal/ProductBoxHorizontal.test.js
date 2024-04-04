import React from 'react';
import { shallow } from 'enzyme';
import ProductBoxHorizontal from './ProductBoxHorizontal';

describe('Component ProductBoxHorizontal', () => {
  it('should render without crashing', () => {
    const component = shallow(<ProductBoxHorizontal />);
    expect(component).toBeTruthy();
  });
});
