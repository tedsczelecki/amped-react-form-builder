import PropTypes from 'prop-types';
import React from 'react';

const Number = (
  {
    id,
    label,
    max,
    min,
    name,
    onChange,
    placeholder,
    value
  }) => (
  <div>
    <input
      id={id}
      label={label}
      max={max}
      min={min}
      name={name}
      onChange={(e) => {onChange(e.target.value)}}
      placeholder={placeholder}
      type="number"
      value={value}
    />
    <span className="amped-number__label">{label}</span>
  </div>
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
  onChange: PropTypes.func,
  max: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  min: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ])
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
