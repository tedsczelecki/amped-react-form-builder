import PropTypes from 'prop-types';
import React from 'react';

const Number = (
  {
    id,
    label,
    name,
    placeholder,
    value,
    onChange
  }) => (
  <input
    id={id}
    label={label}
    name={name}
    type="number"
    placeholder={placeholder}
    onChange={onChange}
  />
);

Number.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  onChange: PropTypes.func
};

Number.defaultProps = {
  id: 'adept-numberfield',
  label: '',
  name: 'adept-numberfield',
  placeholder: '',
  value: '',
  onChange: () => {}
};

export default Number;
