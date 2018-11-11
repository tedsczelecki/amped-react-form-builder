import PropTypes from 'prop-types';
import React, { Component } from 'react';

class TextFieldContainer extends Component {

  static propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ]),
    onSubmit: PropTypes.func
  };

  static defaultProps = {
    id: 'adept-textfield',
    label: '',
    name: 'adept-textfield',
    placeholder: '',
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
    return (
      <input
        id={this.props.id}
        label={this.props.label}
        name={this.props.name}
        placeholder={this.props.placeholder}
        value={this.state.value}
        onChange={this.handleChange}
        onKeyDown={this.handleKeyDown}
      />
    );
  }
}

export default TextFieldContainer;
