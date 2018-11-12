import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

class Select extends PureComponent{

  static propTypes = {
    disabled: PropTypes.bool,
    label: PropTypes.string,
    name: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.any.isRequired
    })),
    value: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.string
    ]),
    onChange: PropTypes.func
  };

  static defaultProps = {
    disabled: false,
    label: '',
    name: '',
    options: [],
    value: [],
    onChange: () => {}
  };

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    this.props.onChange(evt.target.value);
  }

  render(){
    const {
      disabled,
      label,
      name,
      options,
      value,
    } = this.props;

    const labelClasses = classNames('amped-select__label', {
      'amped-select__label--valid': value,
    });

    return (
      <div className='amped-select'>
          <select
            className="amped-select__dropdown"
            disabled={disabled}
            name={name}
            value={value}
            onChange={this.handleChange}
          >
            <option value="" disabled />
            {options.map((option, i) => {
              return (
                <option key={i} value={option.value}>{option.label}</option>
              )
            })}
          </select>
          <span className="amped-select__highlight" />
          <span className="amped-select__bar" />
          <label className={labelClasses}>{label}</label>
      </div>
    )
  }
}

export default Select;
