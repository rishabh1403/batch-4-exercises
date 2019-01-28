
function lastIndexOf(element, list) {
  return list.reduce((acc, el, index) => {
    if (el === element) {
      return index;
    }
    return acc;
  }, -1);
}

export {
  lastIndexOf,
};
