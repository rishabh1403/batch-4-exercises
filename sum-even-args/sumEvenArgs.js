
function sumEvenArgs(...numbers) {
  return numbers.filter(el => el % 2 === 0)
    .reduce((acc, el) => acc + el, 0);
}

export {
  sumEvenArgs,
};
