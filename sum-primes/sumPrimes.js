const range = n => new Array(n).fill().map((el, index) => index + 1);

const filterArrayForPrimeTest = (arr, num) => arr.filter(el => el >= 2 && el < num);

const isPrime = num => filterArrayForPrimeTest(range(num), num).every(el => num % el !== 0);

function sumPrimes(n) {
  return range(n).reduce((acc, el) => {
    if (isPrime(el)) {
      return acc + el;
    }
    return acc;
  }, -1);
}

export {
  sumPrimes,
};
