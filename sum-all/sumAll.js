function sumRange(initialValue, finalValue, sum = 0) {
  if (initialValue > finalValue) {
    return sum;
  }
  return sumRange(initialValue + 1, finalValue, sum + initialValue);
}
function sumAll(range) {
  if (range[0] < range[1]) {
    return sumRange(range[0], range[1]);
  }
  return sumRange(range[1], range[0]);
}

export {
  sumAll,
};
