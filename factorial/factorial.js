const range = num => new Array(num).fill().map((el, index) => index + 1);

function factorial(num) {
  return range(num).reduce((acc, el) => acc * el, 1);
}
export {
  factorial,
};
