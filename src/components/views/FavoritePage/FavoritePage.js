import React from 'react';
import { useSelector } from 'react-redux';
import { getProductsByFavorite } from '../../../redux/productsRedux';
import ProductBox from '../../common/ProductBox/ProductBox';

const FavoritePage = () => {
  const favoriteProducts = useSelector(state => getProductsByFavorite(state));
  return (
    <div className='container'>
      {favoriteProducts.map(product => (
        <ProductBox key={product.id} {...product} />
      ))}
    </div>
  );
};

export default FavoritePage;
