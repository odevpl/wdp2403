import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { getAllProducts } from '../../../redux/productsRedux';
import ProductBox from '../../common/ProductBox/ProductBox';
import Furniture from '../../features/Furniture/Furniture';
import { DeviceTypeContext } from '../../layout/MainLayout/MainLayout';
import PropTypes from 'prop-types';

const FavoritePage = () => {
  const favoriteProducts = useSelector(state => getAllProducts(state));
  const deviceType = useContext(DeviceTypeContext);

  return (
    <div className='container'>
      <div className='row mt-5'>
        {favoriteProducts.map(product => {
          if (localStorage.getItem(`favorite${product.id}`) === 'true') {
            return (
              <div className={deviceType}>
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
FavoritePage.propTypes = {
  deviceType: PropTypes.string,
};

export default FavoritePage;
