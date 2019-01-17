function generateRangeArray(numberToCheckForPrime) {
  return new Array(numberToCheckForPrime)
    .fill()
    .map((el, index) => index)
    .filter(el => el >= 2 && el < numberToCheckForPrime);
}
function primalityTest(numberToCheckForPrime) {
  if (numberToCheckForPrime < 2) {
    return false;
  }
  const numberRange = generateRangeArray(numberToCheckForPrime);
  return numberRange.every(currentNumber => numberToCheckForPrime % currentNumber !== 0);
}

export {
  primalityTest,
};
