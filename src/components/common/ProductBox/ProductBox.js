import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { faStar as faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';
import Stars from '../Stars/Stars';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import clsx from 'clsx';
import QucikView from '../../views/QuickView/QuickView';

const ProductBox = ({
  id,
  favorite,
  category,
  comparision,
  name,
  price,
  promo,
  stars,
  userStars,
  img,
  oldPrice,
  description,
}) => {
  const [showPopup, setShowPopup] = useState(false);

  const quickViewHandle = e => {
    e.preventDefault();
    setShowPopup(true);
  };
  const closeQuickView = e => {
    e.preventDefault();
    setShowPopup(false);
  };
  return (
    <div className={styles.root}>
      <Link to={`/product/${name}`}>
        <div className={styles.photo}>
          <img src={img} alt={name} />
          {promo && <div className={styles.sale}>{promo}</div>}
          <div className={styles.buttons}>
            <Button onClickHandle={quickViewHandle} variant='small'>
              Quick View
            </Button>
            <Button variant='small'>
              <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
            </Button>
          </div>
        </div>
      </Link>
      <div className={styles.content}>
        <Link to={`/product/${name}`}>
          <h5>{name}</h5>
        </Link>
        <Stars stars={stars} userStars={userStars} id={id} />
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
      {showPopup ? (
        <QucikView
          close={closeQuickView}
          name={name}
          favorite={favorite}
          comparision={comparision}
          price={price}
          promo={promo}
          stars={stars}
          img={img}
          oldPrice={oldPrice}
          description={description ? description : 'no description'}
          category={category}
        />
      ) : (
        ''
      )}
    </div>
  );
};

ProductBox.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  promo: PropTypes.string,
  stars: PropTypes.number,
  userStars: PropTypes.number,
  img: PropTypes.string,
  favorite: PropTypes.bool,
  comparision: PropTypes.bool,
  oldPrice: PropTypes.number,
  description: PropTypes.string,
  category: PropTypes.string,
};

export default ProductBox;
