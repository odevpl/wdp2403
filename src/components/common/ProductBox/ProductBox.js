import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';
import Stars from '../Stars/Stars';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { addToCompare } from '../../../redux/productsRedux';
import { getCompareProducts } from '../../../redux/productsRedux';
import { useSelector } from 'react-redux';
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

  const dispatch = useDispatch();
  const compareProducts = useSelector(state => getCompareProducts(state));

  const isProductAlreadyCompared = compareProducts.some(product => product.id === id);

  const [localFavorite, setLocalFavorite] = useState(favorite);

  useEffect(() => {
    if (localStorage.getItem(`favorite${id}`) === 'true') {
      setLocalFavorite(true);
    } else if (localStorage.getItem(`favorite${id}`) === 'false' && localFavorite === null) {
      const randomIndex = Math.floor(Math.random() * 10);
      setLocalFavorite(randomIndex);
    }
  }, [id, localFavorite]);

  const handleAddToCompare = e => {
    e.preventDefault();

    if (!isProductAlreadyCompared) {
      if (compareProducts.length < 4) {
        dispatch(addToCompare(id));
      } else {
        alert('Maximum 4 products can be added to comparision.');
      }
    } else {
      alert('This product is already included in comparision.');
      return;
    }
  };

  const favoriteHandle = e => {
    e.preventDefault();
    setLocalFavorite(!localFavorite);
    localStorage.setItem(`favorite${id}`, !localFavorite);
  };

  return (
    <div className={styles.root}>
      <div className={styles.photo}>
        <Link to={`/product/${name}`}>
          <img src={img} alt={name} />
          {promo && <div className={styles.sale}>{promo}</div>}
        </Link>
        <div className={styles.buttons}>
          <Button onClickHandle={quickViewHandle} variant='small'>
            Quick View
          </Button>
          <Button variant='small'>
            <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
          </Button>
        </div>
      </div>
      <div className={styles.content}>
        <Link to={`/product/${name}`}>
          <h5>{name}</h5>
        </Link>
        <Stars stars={stars} userStars={userStars} id={id} />
      </div>
      <div className={styles.line}></div>
      <div className={styles.actions}>
        <div className={styles.outlines}>
          <Button variant='outline' favorite={localFavorite} onClick={favoriteHandle}
            className={localFavorite ? styles.favoriteIcon : ''}
          >
            <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
          </Button>
          <Button
            variant='outline'
            comparision={comparision}
            onClick={handleAddToCompare}
          >
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
          id={id}
          userStars={userStars}
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
