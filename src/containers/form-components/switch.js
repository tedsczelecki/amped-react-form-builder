import PropTypes from 'prop-types';
import React from 'react';

import './style/switch.scss';

const FormSwitch = (
  {
    id,
    label,
    name,
    value,
    values,
    onChange
  }) => {

  let _id = null;

  if (!id) {
    _id = `${name}-form-switch`;
  }
  const handleChange = (evt) => {
    onChange(evt.target.checked ? values.on : values.off);
  };
  return (
    <div className="adept-form-component__switch">
      <label htmlFor={_id}>{label}</label>
      <div className="adept-form-component__switch__container">
        <input
          checked={value === values.on || value === values.on.toString()}
          className="adept-form-component__switch__input"
          id={_id}
          name={name}
          type="checkbox"
          onChange={handleChange}
        />
        <div className="adept-form-component__switch__visual">
          <div className="adept-form-component__switch__indicator" />
        </div>
      </div>
    </div>
  );
};

FormSwitch.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  values: PropTypes.shape({
    on: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ]).isRequired,
    off: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ]).isRequired
  }),
  onChange: PropTypes.func
};

FormSwitch.defaultProps = {
  id: '',
  label: 'Form Switch',
  name: 'form-switch',
  value: 0,
  values: {
    on: '1',
    off: '0',
  },
  onChange: () => {}
};

export default FormSwitch;
