export default {
  fields: [
    [
      {
        label: 'Textfields',
        type: 'header',
      },
    ],
    [
      {
        name: 'first_name',
        label: 'First Name',
        type: 'text',
      },
      {
        name: 'middle_name',
        label: 'Middle Name',
        type: 'text',

      },
      {
        name: 'last_name',
        label: 'Last Name',
        type: 'text',
      },
    ],
    [
      {
        name: 'first_name',
        label: 'First Name',
        type: 'text',
        disabled: true,
      },
      {
        defaultValue: 'Franklin',
        name: 'maiden_name',
        label: 'Maiden Name',
        type: 'text',

      },
    ],
    [
      {
        label: 'Option Lists',
        type: 'header',
      },
    ],
    [
      {
        name: 'checkbox_list_vertical',
        label: 'Vertical Checkbox List',
        type: 'checkbox',
        options: [
          {
            label: 'Option 1',
            value: 'option_1'
          },
          {
            label: 'Option 2',
            value: 'option_2'
          },
          {
            label: 'Option 3',
            value: 'option_3'
          },
          {
            label: 'Option 4',
            value: 'option_4'
          },
        ],
      },
      {
        name: 'radio_list_vertical',
        label: 'Vertical Radio List',
        type: 'radio',
        options: [
          {
            label: 'Option 1',
            value: 'option_1'
          },
          {
            label: 'Option 2',
            value: 'option_2'
          },
          {
            label: 'Option 3',
            value: 'option_3'
          },
          {
            label: 'Option 4',
            value: 'option_4'
          },
        ],
      },
    ],
    [
      {
        name: 'checkbox_list_horizontal',
        label: 'Horzontal Checkbox List',
        type: 'checkbox',
        options: [
          {
            label: 'Option 1',
            value: 'option_1'
          },
          {
            label: 'Option 2',
            value: 'option_2'
          },
          {
            label: 'Option 3',
            value: 'option_3'
          },
          {
            label: 'Option 4',
            value: 'option_4'
          },
        ],
        props: {
          orientation: 'horizontal'
        }
      },
      {
        name: 'radio_list_horizontal',
        label: 'Horzontal Radio List',
        type: 'radio',
        options: [
          {
            label: 'Option 1',
            value: 'option_1'
          },
          {
            label: 'Option 2',
            value: 'option_2'
          },
          {
            label: 'Option 3',
            value: 'option_3'
          },
          {
            label: 'Option 4',
            value: 'option_4'
          },
        ],
        props: {
          orientation: 'horizontal'
        }
      },
    ],
    [
      {
        label: 'Switch',
        type: 'header',
      },
    ],
    [
      {
        name: 'on_off',
        label: ['On', 'Off'],
        type: 'switch',
      },
      {
        disabled: true,
        name: 'on_off',
        label: ['Yes', 'No'],
        type: 'switch',
      },
    ],
    [
      {
        label: 'Select',
        type: 'header',
      },
    ],
    [
      {
        name: 'select_list',
        label: 'Select list',
        type: 'select',
        options: [
          {
            label: 'Option 1',
            value: 'option_1'
          },
          {
            label: 'Option 2',
            value: 'option_2'
          },
          {
            label: 'Option 3',
            value: 'option_3'
          },
          {
            label: 'Option 4',
            value: 'option_4'
          },
        ],
      },
    ]
  ]
};
