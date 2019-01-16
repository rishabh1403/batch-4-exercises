
function type(value) {
  if (Array.isArray(value)) {
    return 'Array';
  }
  if (typeof value === 'number') {
    return 'Number';
  }
  if (typeof value === 'string') {
    return 'String';
  }
  if (value instanceof RegExp) {
    return 'RegExp';
  }
  if (value === null) {
    return 'Null';
  }
  if (value === undefined) {
    return 'Undefined';
  }
  return 'Object';
}

export {
  type,
};
