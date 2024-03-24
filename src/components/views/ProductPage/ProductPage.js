import React from 'react';
// import PropTypes from 'prop-types';
import styles from './ProductPage.module.scss';

const ProductPage = () => {
  return (
    <div className='container'>
      <div className={styles.root}>
        <div className={styles.splash}>
          <div className={styles.headline}>
            <span>
              BEDROOM <strong>FURNITURE</strong>
            </span>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};

// ProductPage.propTypes = {};

export default ProductPage;
