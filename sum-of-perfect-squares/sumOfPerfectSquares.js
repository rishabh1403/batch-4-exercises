
function sumOfPerfectSquares(n) {
  let ans = 0;
  while (n !== 0) {
    let num = Math.pow(Math.floor(Math.sqrt(n)), 2);
    n = n - num;
    ans++;
  }
  return ans;
}

export {
  sumOfPerfectSquares,
};
