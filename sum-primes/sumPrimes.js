const range = num => new Array(num).fill().map((el, index) => index + 1);
const filterForPrime = arr => arr.filter(el => el >= 2 && el < arr.length);
const isPrime = num => filterForPrime(range(num)).every(el => num % el !== 0);
function sumPrimes(n) {
  return range(n).filter(el => isPrime(el)).reduce((acc, el) => acc + el, -1);
}

export {
  sumPrimes,
};
