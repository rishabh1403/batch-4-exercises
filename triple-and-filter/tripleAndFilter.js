
function tripleAndFilter(numbers) {
  return numbers.map(el => el * 3)
    .filter(el => el % 5 === 0);
}

export {
  tripleAndFilter,
};
