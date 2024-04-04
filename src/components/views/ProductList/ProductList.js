import React from 'react';
// import PropTypes from 'prop-types';
import styles from './ProductList.module.scss';

const ProductList = () => {
  return (
    <div className='container'>
      <div className={styles.root}>
        <div className={styles.splash}>
          <div className={styles.headline}>
            <span className='col-sm'>
              BEDROOM <strong>FURNITURE</strong>
            </span>
            <p className='col-sm'>
              ALWAYS <span className={styles.discount}>25% </span> OFF OR MORE
            </p>
          </div>
        </div>
        <div className={styles.belt}>
          <span>Home</span> {'>'} <span className={styles.destination}>Furniture</span>
        </div>
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
  );
};

// ProductList.propTypes = {};

export default ProductList;
