import PropTypes from 'prop-types';
import React from 'react';

import ProductSearch from '../../features/ProductSearch/ProductSearch';

import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import styles from './MenuBar.module.scss';

const MenuBar = ({ children }) => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row align-items-center'>
        <div className='col'>
          <ProductSearch />
        </div>
        <div className={'col-auto ' + styles.menu}>
          <ul>
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

MenuBar.propTypes = {
  children: PropTypes.node,
};

export default MenuBar;
