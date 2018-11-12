import PropTypes from 'prop-types';
import React from 'react';

const Textarea = (
  {
    label,
    name,
    value,
    onChange
  }) => {

  const handleChange = (evt) => {
    onChange(evt.target.value);
  };

  const id = `${name}-${Date.now()}`;

  return (
    <div className="adept-form-textarea__container">
      <label htmlFor={id} className="adept-form-textarea__label md-text--secondary">{label}</label>
      <textarea
        className="adept-form-textarea"
        id={id}
        name={name}
        onChange={handleChange}
      >{value[name]}
      </textarea>
    </div>
  );
};

Textarea.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  onChange: PropTypes.func
};

Textarea.defaultProps = {
  label: 'Textarea',
  name: '',
  value: '',
  onChange: () => {}
};

export default Textarea;
