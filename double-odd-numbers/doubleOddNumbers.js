
function doubleOddNumbers(numbers) {
  return numbers.filter(num => num % 2 !== 0).map(el => el * 2);
}

export {
  doubleOddNumbers,
};
