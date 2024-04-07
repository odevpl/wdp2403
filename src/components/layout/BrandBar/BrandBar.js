import React, { useRef, useState, useEffect } from 'react';
import styles from '../BrandBar/BrandBar.module.scss';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';
import Button from '../../common/Button/Button';

const BrandBar = ({ brands }) => {
  const [itemWidth, setItemWidth] = useState(0);
  const [visibleStartIndex, setVisibleStartIndex] = useState(0);
  const sliderRef = useRef(null);
  const visibleBrands = 6;

  useEffect(() => {
    const sliderContainer = sliderRef.current;
    if (sliderContainer) {
      const containerWidth = sliderContainer.offsetWidth;
      const itemWidth = containerWidth / visibleBrands;
      setItemWidth(itemWidth);
    }
  }, [visibleBrands]);

  const handleScroll = (e, direction) => {
    e.preventDefault();
    const scrollAmount = direction === 'left' ? -itemWidth : itemWidth;
    sliderRef.current.scrollLeft += scrollAmount;

    const newVisibleStartIndex =
      direction === 'left'
        ? Math.max(0, visibleStartIndex - visibleBrands)
        : Math.min(brands.length - visibleBrands, visibleStartIndex + visibleBrands);
    setVisibleStartIndex(newVisibleStartIndex);
  };

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <div className={styles.brandsBar}>
              <Button
                className={clsx(styles.arrowBox, styles.arrowLeft)}
                onClick={e => handleScroll(e, 'left')}
                variant='outline'
              >
                <FontAwesomeIcon className={styles.icon} icon={faChevronLeft} />
              </Button>
              <div className={styles.slider} ref={sliderRef}>
                <ul className={styles.brands}>
                  {brands.map((item, index) => {
                    const isHidden =
                      index < visibleStartIndex ||
                      index >= visibleStartIndex + visibleBrands;
                    return (
                      <li
                        key={item.id}
                        className={clsx(styles.brand, isHidden && styles.noActive)}
                      >
                        <img src={item.img} alt={item.name} />
                      </li>
                    );
                  })}
                </ul>
              </div>
              <Button
                className={clsx(styles.arrowBox, styles.arrowRight)}
                onClick={e => handleScroll(e, 'right')}
                variant='outline'
              >
                <FontAwesomeIcon className={styles.icon} icon={faChevronRight} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

BrandBar.propTypes = {
  brands: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      img: PropTypes.string,
    })
  ),
};

BrandBar.defaultProps = {
  brands: [],
};

export default BrandBar;
