import { connect } from 'react-redux';

import BrandBar from './BrandBar';

import { getAll } from '../../../redux/brandsRedux.js';

const mapStateToProps = state => ({
  brands: getAll(state),
});

export default connect(mapStateToProps)(BrandBar);
