function sumFibs(n) {
  let firstNumber = 0;
  let secondNumber = 1;
  let thirdNumber = 1;
  let sum = secondNumber;
  for (let i = 0; ; i += 1) {
    thirdNumber = firstNumber + secondNumber;
    firstNumber = secondNumber;
    secondNumber = thirdNumber;
    if (thirdNumber % 2 !== 0 && thirdNumber < n) {
      sum += thirdNumber;
    }
    if (thirdNumber >= n) break;
  }
  return sum;
}

export {
  sumFibs,
};
