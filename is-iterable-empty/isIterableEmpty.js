
function isIterableEmpty(checkForEmptyIterable) {
  const iterable = checkForEmptyIterable[Symbol.iterator]();
  // const { value } = iterable.next();
  // if (value) {
  //   return false;
  // }
  // return true;
  return iterable.next().done;
}

export {
  isIterableEmpty,
};
