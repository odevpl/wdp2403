import React from 'react';

// import PropTypes from 'prop-types';

import styles from './ProductList.module.scss';
import { getAllCategories } from '../../../redux/categoriesRedux';
import { getAllProducts } from '../../../redux/productsRedux';
import { useSelector } from 'react-redux';
import Furniture from '../../features/Furniture/Furniture';

const ProductList = () => {
  const allCategories = useSelector(getAllCategories);
  const allProducts = useSelector(getAllProducts);

  // return (
  //   <div className={styles.root}>
  //     <Furniture categories={allCategories} products={allProducts} />
  //   </div>
  // );
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.container}>
          <div>Banner</div>
        </div>
        <div className={styles.container}>
          <div className='col-md-9'>ProductList</div>
          <div className='col-md-3'>
            <div>Filters</div>
            <div>by categories</div>
            <div>by color</div>
            <div>by price</div>
            <div>by size</div>
          </div>
        </div>
        <div className={styles.container}>Brands</div>
      </div>
      <Furniture categories={allCategories} products={allProducts} />
    </div>
  );
};

// ProductList.propTypes = {};

export default ProductList;
