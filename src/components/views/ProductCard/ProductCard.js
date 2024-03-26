import styles from './ProductCard.module.scss';
import React from 'react';
import ProductReviews from '../../features/ProductReviews/ProductReviews';

const ProductCard = () => {
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.productCard}>
          <ul>
            <li>
              {' '}
              <a href='#'>Description</a>
            </li>
            <li>
              {' '}
              <a className={styles.active} href='#'>
                Reviews(0)
              </a>
            </li>
            <li>
              {' '}
              <a href='#'>Specyfication</a>
            </li>
            <li>
              {' '}
              <a href='#'>Custom Tab</a>
            </li>
          </ul>

          <ProductReviews />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
