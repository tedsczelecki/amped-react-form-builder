import React, { Component } from 'react';

import { AmpedForm } from './containers/form';
import { kitchenSinkForm } from './constants/forms';

import './demo.scss';

class Demo extends Component {
  render() {
    return (
      <div className="form-builder-page">
        <AmpedForm
          formData={kitchenSinkForm}
          onSubmit={(values) => console.log('Form submitted', values) }
        />

      </div>
    );
  }
}

export default Demo;
