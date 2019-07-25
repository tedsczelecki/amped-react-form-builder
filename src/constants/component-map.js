import Checkbox from '../components/form-components/checkbox';
import Header from '../components/form-components/header';
import Number from '../components/form-components/number';
import Radio from '../components/form-components/radio';
import Select from '../components/form-components/select';
import Switch from '../components/form-components/switch';
import Textarea from '../components/form-components/textarea';
import TextField from '../components/form-components/textfield';

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
  select: {
    component: Select,
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
