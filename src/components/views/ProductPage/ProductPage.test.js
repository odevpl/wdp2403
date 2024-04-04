import React from 'react';
import { shallow } from 'enzyme';
import ProductPage from './ProductPage';
import store from '../../../redux/store';
import { Provider } from 'react-redux';

describe('ProductPage', () => {
  it('renders without crashing', () => {
    shallow(
      <Provider store={store}>
        <ProductPage />
      </Provider>
    );
  });
});
