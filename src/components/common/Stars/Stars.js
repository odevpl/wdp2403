import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Stars.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { useDispatch } from 'react-redux';
import { addUserStars } from '../../../redux/productsRedux';

const Stars = ({ stars, userStars, id }) => {
  const [showStars, setShowStars] = useState(userStars || stars);
  const [onMouse, setOnMouse] = useState(0);

  const dispatch = useDispatch();

  const handleClick = value => {
    dispatch(addUserStars({ id, userStars: value }));
    setShowStars(value);
  };

  const solidStar = (i, stateValue) => {
    if (!onMouse && i <= stateValue) {
      return true;
    } else if (i <= onMouse) {
      return true;
    }
    return false;
  };

  return (
    <div className={styles.stars}>
      {[1, 2, 3, 4, 5].map(i => (
        <a
          key={i}
          className={`${solidStar(i, userStars) ? styles.userStars : ''}`}
          onClick={() => handleClick(i)}
          onMouseEnter={() => setOnMouse(i)}
          onMouseLeave={() => setOnMouse(0)}
        >
          <FontAwesomeIcon icon={solidStar(i, showStars) ? faStar : farStar}>
            {i}star
          </FontAwesomeIcon>
        </a>
      ))}
    </div>
  );
};

Stars.propTypes = {
  id: PropTypes.string,
  stars: PropTypes.number,
  userStars: PropTypes.number,
};

export default Stars;
