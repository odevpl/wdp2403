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

  return (
    <div className={styles.root}>
      <Furniture categories={allCategories} products={allProducts} />
    </div>
  );
};

// ProductList.propTypes = {};

export default ProductList;
