import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProductBoxHorizontal.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faExchangeAlt,
  faShoppingBasket,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const ProductBoxHorizontal = ({ name, price, promo, stars, img, description }) => {
  return (
    <div className={styles.root}>
      <Link to={`/product/${name}`}>
        <div className={styles.photo}>
          <img src={img} alt={name} />
          {promo && <div className={styles.sale}>{promo}</div>}
        </div>
      </Link>
      <div className={styles.body}>
        <div className={styles.content}>
          <Link to={`/product/${name}`}>
            <h5>{name}</h5>
          </Link>
          <div className={styles.price}>
            <span>$ {price}</span>
          </div>
          <div className={styles.stars}>
            {[1, 2, 3, 4, 5].map(i => (
              <a key={i} href='#'>
                {i <= stars ? (
                  <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
                ) : (
                  <FontAwesomeIcon icon={farStar}>{i} stars</FontAwesomeIcon>
                )}
              </a>
            ))}
          </div>
          <div className={styles.description}>
            <span>{description}</span>
          </div>
        </div>
        <div className={styles.line}></div>
        <div className={styles.action}>
          <Button variant='outline'>
            <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
          </Button>
          <Button variant='outline'>
            <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
          </Button>
          <Button variant='outline'>
            <FontAwesomeIcon icon={faSearch}>Quick View</FontAwesomeIcon>
          </Button>
          <Button variant='small'>
            <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
          </Button>
        </div>
      </div>
    </div>
  );
};

ProductBoxHorizontal.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
  price: PropTypes.number,
  promo: PropTypes.string,
  stars: PropTypes.number,
  img: PropTypes.string,
  description: PropTypes.string,
};

export default ProductBoxHorizontal;
