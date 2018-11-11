import React, { Component } from 'react';

import { AmpedForm } from './containers/form';
import { kitchenSinkForm } from './constants/forms';

import './app.scss';

class App extends Component {
  render() {
    return (
      <div className="form-builder-page">

        <AmpedForm
          formData={kitchenSinkForm}
        />

      </div>
    );
  }
}

export default App;
