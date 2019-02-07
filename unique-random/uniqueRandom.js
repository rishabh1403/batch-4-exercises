
function uniqueRandom(start, end) {
  let randomValue = start;
  let newRandom = start;
  return () => {
    while (newRandom === randomValue) {
      newRandom = Math.floor(Math.random() * end) + start;
    }
    randomValue = newRandom;
    return randomValue;
  };
}

export {
  uniqueRandom,
};
