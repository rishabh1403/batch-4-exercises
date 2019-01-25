
function isOdd(num) {
  return num < 2 ? num === 1 : isOdd(num - 2);
}

export {
  isOdd,
};
