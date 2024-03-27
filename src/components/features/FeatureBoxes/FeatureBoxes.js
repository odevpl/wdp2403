import React from 'react';
import PropTypes from 'prop-types';

import {
  faTruck,
  faHeadphones,
  faReplyAll,
  faBullhorn,
} from '@fortawesome/free-solid-svg-icons';

import styles from './FeatureBoxes.module.scss';
import FeatureBox from '../../common/FeatureBox/FeatureBox';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
const FeatureBoxes = () => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <Link to='/freeshipping'>
            <FeatureBox icon={faTruck}>
              <h5>Free shipping</h5>
              <p>All orders</p>
            </FeatureBox>
          </Link>
        </div>
        <div className='col'>
          <Link to='/support'>
            <FeatureBox icon={faHeadphones}>
              <h5>24/7 customer</h5>
              <p>support</p>
            </FeatureBox>
          </Link>
        </div>
        <div className='col'>
          <Link to='/guarantee'>
            <FeatureBox icon={faReplyAll}>
              <h5>Money back</h5>
              <p>guarantee</p>
            </FeatureBox>
          </Link>
        </div>
        <div className='col'>
          <Link to='/discount'>
            <FeatureBox icon={faBullhorn}>
              <h5>Member discount</h5>
              <p>First order</p>
            </FeatureBox>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

FeatureBoxes.propTypes = {
  children: PropTypes.node,
};

export default FeatureBoxes;
