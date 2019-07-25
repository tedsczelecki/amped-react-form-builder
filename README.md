# Amped Form Builder
> Tired of making form after form in React? Yeah me too. Build forms easier in React with JSON.

[![NPM Version][npm-image]][npm-url]
[![Downloads Stats][npm-downloads]][npm-url]

This library takes JSON and converts it into HTML and provides a simple API for you to interact with the form data. You can use the built in components and logic or provide a few props and make it totally custom.

## Installation

```sh
npm i -s amped-react-form-builder
```

## Usage example

```jsx harmony
import React, { Component } from 'react';

import { AmpedForm } from './containers/form';
import { kitchenSinkForm } from './constants/forms';

import './demo.scss';

export default class Demo extends Component {
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
```

### AmpedForm
> Props
#### `formData`
The JSON data that the form will be created out of.

```javascript
{
  fields: [ 
    [
      {
        label: String,
        type: String
      }
    ]
    
  ]
}
```

- `fields` - `[[FieldObject]]` - An array containing all of the fields in the form. All of the indexes in this array are arrays themselves. You can think of this as the rows and columns in the form.
- `FieldObject` Object - This contains all of the data for a single field in the form. There are many common keys between all fields types but some unique ones to provide extra functionality
  - `label` [Required] - `String` - The label that will appear along side the field in a `<label></label>` tag
  - `type` [Required] - `String` - The type of field that should be rendered. There is no fixed values for this with the exception of it needs to be a key in the `ComponentMap` that is passed to the form
  - `name` - `String` - The key that the value of the field is saved to when passed back from the form. This defaults to the label
  - `disabled` - `Boolean` - Whether the field is disabled or not.
  - `defaultValue` - `String|Number` - If there is a default value and AmpedForm when there is a constant default value to the form. If you are creating a form to edit existing values, it will be easier to pass that data as `[name]: value` to the `formEntries` prop.
  - `options` - `[{label: String, value: String|Number]` - This is used for form types with multiple options. The built in types are `select`, `checkbox`, `radio`

#### `componentMap`

When the built in field components won't work (like 99% of the time) you can override the built-in components with this prop
```javascript
{
  [field type]: {
    component: [field component]
  }
```

The built in ones are:
 - `checkbox`
 - `header`
 - `number`
 - `radio`
 - `select`
 - `switch`
 - `text`
 - `textarea`

You can pass these or makeup your own and pass it as the `type` in the json form data.

#### onSubmit

This is a callback function which is invoked when the submit button is clicked or enter is hit enter in any of the built in text fields.


