import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './NewFurniture.module.scss';
import ProductBox from '../../common/ProductBox/ProductBox';

const NewFurniture = ({ categories, products }) => {
  const [activePage, setActivePage] = useState(0);
  const [activeCategory, setActiveCategory] = useState('bed');
  const [screenWidth, setScreentWidth] = useState(window.innerWidth);

  const colDeviceMode = {
    desktop: 'col-3',
    tablet: 'col-4',
    mobile: 'col-6',
  };

  const [deviceType, setDeviceType] = useState(colDeviceMode.desktop);

  useEffect(() => {
    const handleResize = () => {
      setScreentWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (screenWidth >= 1024) {
      setDeviceType(colDeviceMode.desktop);
    } else if (screenWidth >= 768) {
      setDeviceType(colDeviceMode.tablet);
    } else {
      setDeviceType(colDeviceMode.mobile);
    }
  }, [screenWidth, colDeviceMode.desktop, colDeviceMode.tablet, colDeviceMode.mobile]);

  const handlePageChange = newPage => {
    setActivePage(newPage);
  };

  const handleCategoryChange = newCategory => {
    setActiveCategory(newCategory);
  };

  const categoryProducts = products.filter(item => item.category === activeCategory);
  const pagesCount = Math.ceil(categoryProducts.length / 8);

  const dots = [];
  for (let i = 0; i < pagesCount; i++) {
    dots.push(
      <li>
        <a
          onClick={() => handlePageChange(i)}
          className={i === activePage && styles.active}
        >
          page {i}
        </a>
      </li>
    );
  }

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.panelBar}>
          <div className='row no-gutters align-items-end'>
            <div className={'col-auto ' + styles.heading}>
              <h3>New furniture</h3>
            </div>
            <div className={'col ' + styles.menu}>
              <ul>
                {categories.map(item => (
                  <li key={item.id}>
                    <a
                      className={item.id === activeCategory && styles.active}
                      onClick={() => handleCategoryChange(item.id)}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className={'col-auto ' + styles.dots}>
              <ul>{dots}</ul>
            </div>
          </div>
        </div>
        <div className='row'>
          {categoryProducts.slice(activePage * 8, (activePage + 1) * 8).map(item => (
            <div key={item.id} className={deviceType}>
              console.log(deviceType);
              <ProductBox {...item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

NewFurniture.propTypes = {
  children: PropTypes.node,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })
  ),
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      category: PropTypes.string,
      price: PropTypes.number,
      stars: PropTypes.number,
      promo: PropTypes.string,
      newFurniture: PropTypes.bool,
    })
  ),
};

NewFurniture.defaultProps = {
  categories: [],
  products: [],
};

export default NewFurniture;
