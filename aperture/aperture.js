// TODO refactor this
function aperture(splitSize, array) {
  if (splitSize > array.length) {
    return [];
  }
  const splitArray = [];
  for (let i = 0; i < array.length; i += 1) {
    if (splitSize + i <= array.length) {
      splitArray.push(array.slice(i, splitSize + i));
    }
  }
  return splitArray;
}

export {
  aperture,
};
