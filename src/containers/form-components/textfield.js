import PropTypes from 'prop-types';
import React, { Component } from 'react';

import './style/textfield.scss';

class TextFieldContainer extends Component {

  static propTypes = {
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

    this.state = {
      value: this.props.value || ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.value !== nextProps.value) {
      this.setState(() => ({
        value: this.state.value
      }));
    }
  }

  handleChange(value) {
    this.setState(() => ({
      value
    }));
  }

  handleKeyDown(evt) {
    if (evt.which === 13) {
      this.props.onSubmit(this.state.value);
      setImmediate(() => this.setState(() => ({
        value: ''
      })));
    }
  }

  render() {
    const {
      id = `amped-textfield-${this.props.name}`,
      label,
      name,
      placeholder,
      type,
      value,
    } = this.props;
    return (
      <div className='amped-textfield'>
        <label htmlFor={id}>{label}</label>
        <input
          id={id}
          label={label}
          name={name}
          placeholder={placeholder}
          type={type}
          value={value}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
        />
      </div>
    );
  }
}

export default TextFieldContainer;
