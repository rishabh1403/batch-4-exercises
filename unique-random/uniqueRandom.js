
function uniqueRandom(start, end) {
  let randomValue = start;
  let newRandomValue = start;
  return () => {
    while (newRandomValue === randomValue) {
      newRandomValue = Math.floor(Math.random() * end) + start;
    }
    randomValue = newRandomValue;
    return randomValue;
  };
}

export {
  uniqueRandom,
};
