import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';
import ProductSearch from '../../features/ProductSearch/ProductSearch';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import styles from './MenuBar.module.scss';

const MenuBar = ({ children }) => {
  const [show, setShow] = useState(false);

  const burgerHandle = e => {
    e.preventDefault();
    setShow(!show);
  };

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row align-items-center justify-content-between'>
          <div className='col  col-md-12 col-xl-6 d-flex order-md-2 order-xl-1 my-1 my-xl-0'>
            <ProductSearch />
          </div>
          <div
            className={
              'col-auto  col-md-12 col-xl-6 order-md-1 order-xl-2 ' + styles.menu
            }
          >
            <button className={'btn ' + styles.burger} onClick={e => burgerHandle(e)}>
              <FontAwesomeIcon icon={faBars} />
            </button>
            <ul className={clsx(show && styles.show)} onClick={() => setShow(!show)}>
              <li>
                <NavLink activeClassName={styles.active} exact to='/'>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName={styles.active} to='/shop/furniture'>
                  Furniture
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName={styles.active} to='/shop/chair'>
                  Chair
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName={styles.active} to='/shop/table'>
                  Table
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName={styles.active} to='/shop/sofa'>
                  Sofa
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName={styles.active} to='/shop/bedroom'>
                  Bedroom
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName={styles.active} to='/blog'>
                  Blog
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

MenuBar.propTypes = {
  children: PropTypes.node,
};

export default MenuBar;
