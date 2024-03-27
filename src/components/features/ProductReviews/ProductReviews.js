import React from 'react';
import styles from './ProductReviews.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import Button from '../../common/Button/Button';

const ProductReviews = () => {
  const stars = 5;
  return (
    <div className={styles.reviews}>
      <div className={'m-4 ' + styles.revList}>
        <p>There are no reviews for this product.</p>
      </div>
      <form className={'m-4'}>
        <h6>Add a review</h6>

        <div className={'my-4'}>
          <label>Your Rating</label>

          <div className={styles.stars}>
            <label className='mr-4'>Bad</label>
            {[1, 2, 3, 4, 5].map(i => (
              <a key={i} href='#'>
                {i <= stars ? (
                  <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
                ) : (
                  <FontAwesomeIcon icon={farStar}>{i} stars</FontAwesomeIcon>
                )}
              </a>
            ))}
            <label className='ml-4'>Good</label>
          </div>
        </div>

        <div className={'my-4'}>
          <label className=''>Your Review</label>
          <textarea rows='5'></textarea>
        </div>

        <div className={'row m-0 '}>
          <div className='col p-0'>
            <input type='text' placeholder='Name*' className=''></input>
          </div>
          <div className='col p-0'>
            <input type='email' placeholder='Email*' className=''></input>
          </div>
          <Button as='button' type='submit' variant='medium'>
            Continue
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ProductReviews;
