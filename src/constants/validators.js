export const emailValidator = (email) => {
  if (!email) {
    return 'Enter a valid email address'
  }
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email.toLowerCase())
    ? false
    : 'Enter a valid email address'
}

export const notEmptyValidator = (val) => {
  return val
    ? false
    : 'Field is required';
}

export const builtInValidators = {
  email: emailValidator,
  notEmpty: notEmptyValidator,
}
