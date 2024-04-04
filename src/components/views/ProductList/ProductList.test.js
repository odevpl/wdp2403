import React from 'react';
import { shallow } from 'enzyme';
import ProductList from './ProductList';
import { Provider } from 'react-redux';
import store from '../../../redux/store';

describe('ProductList', () => {
  it('renders without crashing', () => {
    shallow(
      <Provider store={store}>
        <ProductList />
      </Provider>
    );
  });
});
