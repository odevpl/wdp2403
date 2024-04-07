import styles from './StickyBar.module.scss';
import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { removeCompare } from '../../../redux/productsRedux';
import { getCompareProducts } from '../../../redux/productsRedux';
import clsx from 'clsx';
import { faStar as faHeart } from '@fortawesome/free-regular-svg-icons';
const StickyBar = () => {
  const dispatch = useDispatch();
  const compareProducts = useSelector(state => getCompareProducts(state));

  const removehandler = (e, product) => {
    e.preventDefault();
    dispatch(removeCompare(product.id));
  };

  if (!compareProducts.length) {
    return '';
  } else
    return (
      <div className={styles.compareWrapper}>
        {compareProducts.map(product => (
          <div key={product.id} className={styles.compareProductWrapper}>
            <div
              className={styles.compareImage}
              style={{ backgroundImage: `url(${product.img})` }}
            >
              <Button
                onClick={e => removehandler(e, product)}
                className={styles.removeButton}
              >
                <FontAwesomeIcon icon={faTimes} />
              </Button>
            </div>
            <div className={styles.compareData}>
              <div className={styles.content}>
                <h5>{product.name}</h5>
              </div>
              <div className={styles.actions}>
                <div className={styles.outlines}>
                  <Button variant='outline' favorite={product.favorite}>
                    <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
                  </Button>
                </div>
                <div className={styles.price}>
                  <span
                    className={clsx(
                      product.oldPrice === 0 && styles.active,
                      styles.oldPrice
                    )}
                  >
                    {' '}
                    $ {product.oldPrice}
                  </span>
                  <Button noHover variant='small'>
                    $ {product.price}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
        <Button>Compare</Button>
      </div>
    );
};

export default StickyBar;
// start
