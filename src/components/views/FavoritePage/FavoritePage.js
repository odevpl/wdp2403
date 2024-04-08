import React from 'react';
import { useSelector } from 'react-redux';
import { getAllProducts } from '../../../redux/productsRedux';
import ProductBox from '../../common/ProductBox/ProductBox';

const FavoritePage = () => {
  const favoriteProducts = useSelector(state => getAllProducts(state));
  return (
    <div className='container'>
      <div className='row mt-5'>
        {favoriteProducts.map(product => {
          if (localStorage.getItem(`favorite${product.id}`) === 'true') {
            return (
              <div className='col-md-3'>
                <ProductBox key={product.id} {...product} />
              </div>
            );
          }
          return '';
        })}
      </div>
    </div>
  );
};

export default FavoritePage;
