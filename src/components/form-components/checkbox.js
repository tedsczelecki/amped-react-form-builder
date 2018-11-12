import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const checkedCompare = (type, value, optionValue) => {
  if (type === 'checkbox') {
    return value.find((v) => v === optionValue);
  }
  return optionValue === value;
};

const CheckboxList = ({
  disabled,
  inputType,
  label,
  name,
  options,
  orientation,
  value,
  onChange
}) => {

  const handleChange = (e) => {
    const { value: inputValue } = e.target;

    if (inputType === 'radio') {
      return onChange(inputValue);
    }

    const valIndex = value.findIndex((v) => v === inputValue);
    if (valIndex === -1) {
      onChange([...value, inputValue]);
    } else {
      onChange([
        ...value.slice(0, valIndex),
        ...value.slice(valIndex + 1),
      ])
    }
  };

  const handleKeyDown = (evt) => {
    if (evt.which === 13) {
      handleChange(evt);
    }
  };

  const groupClasses = classNames(
    'amped-checkbox-list__group',
    `amped-checkbox-list__group--${orientation}`,
    `amped-checkbox-list__group--${options.length}`,
  );

  return (
    <div className="amped-checkbox-list">
      {label && <div className="amped-checkbox-list__group-label">{label}</div>}
      <div className={groupClasses}>
        {options.map((option, i) => {
          const id = `checkbox-${name}-${i}`;
          return (
            <label className='amped-checkbox-list__group__item' htmlFor={id} key={i}>
              <input
                className="filled-in with-gap"
                checked={checkedCompare(inputType, value, option.value)}
                disabled={disabled}
                id={id}
                name={name}
                type={inputType}
                value={option.value}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
              />
              <span>{option.label}</span>
            </label>
          );
        })}
      </div>
    </div>
  );
};

CheckboxList.propTypes = {
  disabled: PropTypes.bool,
  inputType: PropTypes.oneOf([
    'checkbox',
    'radio',
  ]),
  label: PropTypes.string,
  name: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired
  })),
  orientation: PropTypes.oneOf([
    'horizontal',
    'vertical',
  ]),
  value: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string
  ]),
  onChange: PropTypes.func
};

CheckboxList.defaultProps = {
  disabled: false,
  inputType: 'checkbox',
  label: '',
  name: '',
  options: [],
  orientation: 'vertical',
  value: [],
  onChange: () => {}
};

export default CheckboxList;
