
function* generatorIterable() {
  let count = 1;
  while (count < 6) {
    yield count;
    count += 1;
  }
}

export {
  generatorIterable,
};
