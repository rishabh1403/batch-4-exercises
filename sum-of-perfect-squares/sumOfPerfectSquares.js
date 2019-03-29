
function sumOfPerfectSquares(num) {
  if (num <= 3) {
    return num;
  }
  let result = num;
  for (let i = 1; i <= num; i += 1) {
    const temp = i * i;
    if (temp > num) {
      break;
    }
    result = Math.min(result, 1 + sumOfPerfectSquares(num - temp));
  }
  return result;
}

export {
  sumOfPerfectSquares,
};
