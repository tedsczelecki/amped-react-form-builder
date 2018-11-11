import Checkbox from '../containers/form-components/checkbox';
import Header from '../containers/form-components/header';
import Number from '../containers/form-components/number';
import Radio from '../containers/form-components/radio';
import Switch from '../containers/form-components/switch';
import Textarea from '../containers/form-components/textarea';
import TextField from '../containers/form-components/textfield';

const fieldComponentMap = {
  checkbox: {
    component: Checkbox
  },
  header: {
    component: Header
  },
  number: {
    component: Number,
  },
  radio: {
    component: Radio,
  },
  switch: {
    component: Switch,
  },
  textarea: {
    component: Textarea,
  },
  text: {
    component: TextField,
  },

};

export default fieldComponentMap;
