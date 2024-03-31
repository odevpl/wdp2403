import React from 'react';
import styles from '../BrandBar/BrandBar.module.scss';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';

const BrandBar = ({ brands }) => {
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <div className={styles.brandsBar}>
              <div className={clsx(styles.arrowBox, styles.arrowLeft)}>
                <FontAwesomeIcon className={styles.icon} icon={faChevronLeft} />
              </div>
              <ul className={styles.brands}>
                {brands.map(item => (
                  <li key={item.id} className={styles.brand}>
                    <img src={item.img} alt={item.name} />
                  </li>
                ))}
              </ul>
              <div className={clsx(styles.arrowBox, styles.arrowRight)}>
                <FontAwesomeIcon className={styles.icon} icon={faChevronRight} />
              </div>
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
