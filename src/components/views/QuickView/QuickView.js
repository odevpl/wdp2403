import React from 'react';
import PropTypes from 'prop-types';
import styles from './QuickView.module.scss';
import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTimes,
  faExchangeAlt,
  faShoppingBasket,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import clsx from 'clsx';
import Stars from '../../common/Stars/Stars';

const QucikView = ({
  id,
  userStars,
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
  console.log('favorite:', favorite, typeof favorite);
  return (
    <div className={styles.root}>
      <div className={'container ' + styles.wrapper}>
        <div className={styles.close}>
          <Button variant='outline' onClickHandle={close}>
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
              <div>
                <span>Rating: </span>
                <Stars stars={stars} userStars={userStars} id={id} />
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
              <Button variant='outline' favorite={true}>
                <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
              </Button>
              <Button variant='outline' comparision={comparision}>
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
  id: PropTypes.string,
  userStars: PropTypes.number,
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
