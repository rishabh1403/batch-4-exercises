// eslint-disable
function applyOperator(...args) {
  if (args.length === 0) {
    throw new Error();
  }
  const [operator, ...numbers] = args;
  if (operator === '+' || operator === '-') {
    return numbers.reduce((acc, el) => {
      return eval(`${acc}${operator}${el}`);
    }, 0);
  } else if (operator === '/' || operator === '*') {
    return numbers.reduce((acc, el) => {
      return eval(`${acc}${operator}${el}`);
    }, 1);
  }
  return 0;
}

export {
  applyOperator,
};
