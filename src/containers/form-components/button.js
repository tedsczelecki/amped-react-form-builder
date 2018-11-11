import PropTypes from 'prop-types';
import React from 'react';

import './style/button.scss';

const Button = ({
  children,
  className,
  onClick,
  ...props
}) => (

  <button
    className='waves-effect waves-light btn'
    {...props}
    onClick={onClick}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string
  ]),
  onClick: PropTypes.func
};

Button.defaultProps = {
  children: 'Button',
  onClick: () => {}
};

export default Button;
