import React from 'react';

import CheckboxList from './checkbox';

import './style/radio.scss';

const RadioList = (props) => <CheckboxList {...props} inputType='radio' />;

export default RadioList;
