function applyOperator(...args) {
  const [operator, ...numbers] = args;
  if (!operator) {
    throw new Error('Operator missing');
  }
  if (operator === '+' || operator === '-') {
    return numbers.reduce((acc, el) => eval(`${acc}${operator}${el}`), 0); // eslint-disable-line
  }
  if (operator === '*') {
    return numbers.reduce((acc, el) => eval(`${acc}${operator}${el}`), 1); // eslint-disable-line
  }
  if (operator === '/') {
    return parseFloat(numbers.reduce((acc, el) => eval(`${acc}${operator}${el}`), 1).toFixed(4)); // eslint-disable-line
  }
  return numbers.reduce((acc, el) => eval(`${acc}${operator}${el}`)); // eslint-disable-line
}

export { applyOperator };
