const createNumArray = num => new Array(num).fill().map((el, index) => index + 1);

function factorial(num) {
  return createNumArray(num).reduce((acc, el) => acc * el, 1);
}
export {
  factorial,
};
