import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const FormSwitch = ({
  disabled,
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
  const [onLabel, offLabel] = label;
  const handleChange = (evt) => {
    onChange(evt.target.checked ? values.on : values.off);
  };

  const switchClasses = classNames('amped-switch', {
    'amped-switch--disabled': disabled,
  });

  return (
    <div className={switchClasses}>
      <div className='switch'>
        <label htmlFor={_id}>
          <span className='amped-switch__off-label'>{offLabel}</span>
          <input
            disabled={disabled}
            type='checkbox'
            onChange={handleChange}
          />
          <span className='lever' />
          <span className='amped-switch__on-label'>{onLabel}</span>
        </label>
      </div>
    </div>
  );
};

FormSwitch.propTypes = {
  disabled: PropTypes.bool,
  id: PropTypes.string,
  label: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string,
  ]),
  name: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number,
    PropTypes.string
  ]),
  values: PropTypes.shape({
    on: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.number,
      PropTypes.string
    ]).isRequired,
    off: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.number,
      PropTypes.string
    ]).isRequired
  }),
  onChange: PropTypes.func
};

FormSwitch.defaultProps = {
  disabled: false,
  id: '',
  label: 'Form Switch',
  name: 'form-switch',
  value: 0,
  values: {
    on: true,
    off: false,
  },
  onChange: () => {}
};

export default FormSwitch;
