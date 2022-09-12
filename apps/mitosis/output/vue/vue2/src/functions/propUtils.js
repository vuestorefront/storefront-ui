function validator(valid, value, defaultValue) {
  if (!value)
    return defaultValue;
  return valid.includes(value) ? value : defaultValue;
}
;
export {
  validator
};
