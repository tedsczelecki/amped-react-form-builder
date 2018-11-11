import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

import './style/textfield.scss';

class TextFieldContainer extends PureComponent {

  static propTypes = {
    disabled: PropTypes.bool,
    id: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ]),
    onSubmit: PropTypes.func
  };

  static defaultProps = {
    disabled: false,
    id: '',
    label: '',
    name: 'amped-textfield',
    placeholder: '',
    type: 'text',
    value: '',
    onSubmit: () => {}
  };

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleChange(e) {
    this.props.onChange(e.target.value);
  }

  handleKeyDown(evt) {
    if (evt.which === 13) {
      this.props.onSubmit(this.state.value);
    }
  }

  render() {
    const {
      disabled,
      id = `amped-textfield-${this.props.name}`,
      label,
      name,
      placeholder,
      type,
      value,
    } = this.props;

    const textFieldClasses = classNames('amped-textfield', {
      'amped-textfield--disabled': disabled,
    });

    const labelClasses = classNames({
      'active': value,
    });

    return (
      <div className={textFieldClasses}>
        <div className='input-field'>
          <input
            disabled={disabled}
            id={id}
            label={label}
            name={name}
            placeholder={placeholder}
            type={type}
            value={value}
            onChange={this.handleChange}
            onKeyDown={this.handleKeyDown}
          />
          <label className={labelClasses} htmlFor={id}>{label}</label>
        </div>
      </div>
    );
  }
}

export default TextFieldContainer;
