function isPrime(i) {
  var isPrime = true;

  for (var j = 2; j < i; j++) {
    if (i % j === 0) {
      isPrime = false;
    }
  }
  return isPrime;
}
function sumPrimes(n) {
  let sum = 0;
  for(let i=2;i<=n;i++){
    if(isPrime(i)){
      sum += i;
    }
  }
  return sum;
}

export {
  sumPrimes,
};
