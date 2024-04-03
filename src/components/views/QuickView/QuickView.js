import React from 'react';
import PropTypes from 'prop-types';
import styles from './QuickView.module.scss';
import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const QucikView = ({ close }) => {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.close}>
          <Button onClickHandle={close}>
            <FontAwesomeIcon icon={faTimes} />
          </Button>
        </div>
        <div className={styles.body}>text</div>
      </div>
    </div>
  );
};

export default QucikView;

QucikView.propTypes = {
  close: PropTypes.func,
};
