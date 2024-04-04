import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faExchangeAlt,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import clsx from 'clsx';

const ProductBox = ({
  favorite,
  comparision,
  name,
  price,
  promo,
  stars,
  img,
  oldPrice,
}) => (
  <div className={styles.root}>
    <Link to={`/product/${name}`}>
      <div className={styles.photo}>
        <img src={img} alt={name} />
        {promo && <div className={styles.sale}>{promo}</div>}
      </div>
    </Link>
    <div className={styles.buttons}>
      <Button variant='small'>Quick View</Button>
      <Button variant='small'>
        <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
      </Button>
    </div>
    <div className={styles.content}>
      <Link to={`/product/${name}`}>
        <h5>{name}</h5>
      </Link>
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
    </div>
    <div className={styles.line}></div>
    <div className={styles.actions}>
      <div className={styles.outlines}>
        <Button variant='outline' favorite={favorite}>
          <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
        </Button>
        <Button variant='outline' comparision={comparision}>
          <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
        </Button>
      </div>
      <div className={styles.price}>
        <span className={clsx(oldPrice === 0 && styles.active, styles.oldPrice)}>
          {' '}
          $ {oldPrice}
        </span>
        <Button noHover variant='small'>
          $ {price}
        </Button>
      </div>
    </div>
  </div>
);

ProductBox.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
  price: PropTypes.number,
  promo: PropTypes.string,
  stars: PropTypes.number,
  img: PropTypes.string,
  favorite: PropTypes.bool,
  comparision: PropTypes.bool,
  oldPrice: PropTypes.number,
};

export default ProductBox;
