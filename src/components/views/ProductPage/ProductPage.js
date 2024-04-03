import React from 'react';
// import PropTypes from 'prop-types';
import styles from './ProductPage.module.scss';
import ProductCard from '../ProductCard/ProductCard';
import NewFurniture from '../../features/NewFurniture/NewFurniture';
import { useSelector } from 'react-redux';
import { getAllCategories } from '../../../redux/categoriesRedux';
import { getAllProducts } from '../../../redux/productsRedux';


const ProductPage = () => {
  const allCategories = useSelector(getAllCategories);
  const allProducts = useSelector(getAllProducts);

  return (
    <div className={styles.root}>
      <ProductCard />
      <NewFurniture categories={allCategories} products={allProducts} />
    </div>
  );
};



// ProductPage.propTypes = {};

export default ProductPage;
