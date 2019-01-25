
function isEven(num) {
  return num < 2 ? num === 0 : isEven(num - 2);
}

export {
  isEven,
};
