import React from 'react';
import PropTypes from 'prop-types';
import styles from './QuickView.module.scss';
import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTimes,
  faStar,
  faExchangeAlt,
  faShoppingBasket,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faHeart } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import clsx from 'clsx';

const QucikView = ({
  close,
  favorite,
  comparision,
  name,
  price,
  promo,
  category,
  oldPrice,
  stars,
  img,
  description,
}) => {
  return (
    <div className={styles.root}>
      <div className={'container ' + styles.wrapper}>
        <div className={styles.close}>
          <Button onClickHandle={close}>
            <FontAwesomeIcon icon={faTimes} />
          </Button>
        </div>
        <div className={styles.contentWrapper}>
          <div className={styles.body}>
            <div className={styles.content}>
              <Link to={`/product/${name}`}>
                <h5>{name}</h5>
              </Link>
              <div className={styles.price}>
                <span>Price: </span>
                <span
                  className={clsx(oldPrice === 0 && styles.active, styles.oldPrice)}
                >
                  $ {' ' + oldPrice}
                </span>
                <span>$ {' ' + price}</span>
              </div>
              <div className={styles.stars}>
                <span>Rating: </span>
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
              <div className={styles.category}>
                <span>Category: </span>
                <span>{' ' + category}</span>
              </div>
              <div className={styles.description}>
                <span>Description: </span>
                <span>{' ' + description}</span>
              </div>
            </div>
            <div className={styles.line}></div>
            <div className={styles.actions}>
              <Button variant='outline'>
                <FontAwesomeIcon icon={faHeart} favorite={favorite}>
                  Favorite
                </FontAwesomeIcon>
              </Button>
              <Button variant='outline'>
                <FontAwesomeIcon icon={faExchangeAlt} comparision={comparision}>
                  Add to compare
                </FontAwesomeIcon>
              </Button>
              <Button variant='outline'>
                <FontAwesomeIcon icon={faSearch}>Quick View</FontAwesomeIcon>
              </Button>
              <Button variant='small'>
                <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
              </Button>
            </div>
          </div>
          <Link to={`/product/${name}`}>
            <div className={styles.photo}>
              <img src={img} alt={name} />
              {promo && <div className={styles.sale}>{promo}</div>}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default QucikView;

QucikView.propTypes = {
  close: PropTypes.func,
  name: PropTypes.string,
  price: PropTypes.number,
  promo: PropTypes.string,
  stars: PropTypes.number,
  img: PropTypes.string,
  description: PropTypes.string,
  oldPrice: PropTypes.number,
  favorite: PropTypes.bool,
  comparision: PropTypes.bool,
  category: PropTypes.string,
};
