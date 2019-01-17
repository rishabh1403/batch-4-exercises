
function hammingDistance(sequence1, sequence2) {
  if (sequence1.length !== sequence2.length) {
    throw new Error();
  }
  return Array.from(sequence1).reduce((acc, element, index) => {
    if (sequence1[index] === sequence2[index]) {
      return acc;
    }
    return acc + 1;
  }, 0);
}

export {
  hammingDistance,
};
