import React from 'react';
import PropTypes from 'prop-types';

import styles from './Button.module.scss';

const Button = ({
  favorite,
  comparision,
  children,
  variant,
  noHover,
  className: propClassName,
  onClickHandle,
  ...props
}) => {
  const classes = [];

  if (propClassName) classes.push(propClassName);

  if (variant) classes.push(styles[variant]);
  else classes.push('main');

  if (favorite) classes.push(styles.active);

  if (comparision) classes.push(styles.active);

  let Comp = 'a';

  if (noHover) {
    classes.push(styles.noHover);
    Comp = 'div';
  }

  if (onClickHandle) {
    return (
      <Comp
        onClick={e => onClickHandle(e)}
        href='#'
        {...props}
        className={classes.join(' ')}
      >
        {children}
      </Comp>
    );
  } else {
    return (
      <Comp href='#' {...props} className={classes.join(' ')}>
        {children}
      </Comp>
    );
  }
};

Button.propTypes = {
  children: PropTypes.node,
  noHover: PropTypes.bool,
  className: PropTypes.string,
  variant: PropTypes.string,
  favorite: PropTypes.bool,
  comparision: PropTypes.bool,
  onClickHandle: PropTypes.func,
};

export default Button;
