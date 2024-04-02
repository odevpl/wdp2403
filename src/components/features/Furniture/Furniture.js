import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Furniture.module.scss';
import ProductBox from '../../common/ProductBox/ProductBox';
import { DeviceTypeContext } from '../../layout/MainLayout/MainLayout';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThLarge, faList } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';
import ProductBoxHorizontal from '../../common/PorductBoxHorizontal/ProductBoxHorizontal';

const Furniture = ({ categories, products }) => {
  const deviceType = useContext(DeviceTypeContext);
  const [activePage] = useState(0);
  const [size, setSize] = useState(12);
  const [gird, setGird] = useState(true);

  const { categoryId } = useParams();

  const girdBtnHandle = e => {
    e.preventDefault();
    setGird(true);
  };
  const listBtnHandle = e => {
    e.preventDefault();
    setGird(false);
  };

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.panelBar}>
          <div className='row no-gutters align-items-end justify-content-between'>
            <div className={'col-auto ' + styles.heading}>
              <h3>{categoryId}</h3>
            </div>
            <div className={'col-auto ' + styles.girdOptions}>
              <form>
                <div>
                  <label htmlFor='select-size'>Size by</label>
                  <select name='sizeBy' id='select-size'>
                    <option>Price: Lowest first </option>
                  </select>
                </div>
                <div>
                  <label htmlFor='show-items'>Show </label>
                  <select
                    onChange={e => setSize(e.target.value)}
                    name='showItems'
                    id='show-items'
                  >
                    <option value='12'>12</option>
                    <option value='24'>24</option>
                    <option value='8'>8</option>
                  </select>
                </div>
              </form>
              <div className={styles.buttons}>
                <button
                  onClick={e => girdBtnHandle(e)}
                  className={clsx(gird && styles.active)}
                >
                  <FontAwesomeIcon icon={faThLarge} />
                </button>
                <button
                  onClick={e => listBtnHandle(e)}
                  className={clsx(!gird && styles.active)}
                >
                  <FontAwesomeIcon icon={faList} />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={'row '}>
          {products.slice(activePage * size, (activePage + 1) * size).map(item => (
            <div key={item.id} className={clsx(gird && deviceType, !gird && 'col-12')}>
              {gird ? <ProductBox {...item} /> : <ProductBoxHorizontal {...item} />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

Furniture.propTypes = {
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
  deviceType: PropTypes.string,
};

Furniture.defaultProps = {
  categories: [],
  products: [],
};

export default Furniture;
