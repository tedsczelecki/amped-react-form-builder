export const generateFormValues = (data) => {
  return data.fields.reduce((ret, row) => {
    return {
      ...ret,
      ...row.reduce((sRet, field) => {
        sRet[field.name] = typeof field.defaultValue === 'object' ?
          JSON.stringify(field.defaultValue) :
          field.defaultValue || getDefaultByType(field.type);
        return sRet;
      }, {})
    };
  }, {});
};

export const getDefaultByType = (type) => {
  switch(type) {
    case 'checkbox':
      return [];
    default:
      return '';
  }
};

export default {
  generateFormValues
};
