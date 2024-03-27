import React from 'react';
// import PropTypes from 'prop-types';
import styles from './ProductPage.module.scss';
import ProductCard from '../ProductCard/ProductCard';

const ProductPage = () => {
  return (
    <div className={styles.root}>
      <ProductCard />
    </div>
  );
};
// ProductPage.propTypes = {};

export default ProductPage;
