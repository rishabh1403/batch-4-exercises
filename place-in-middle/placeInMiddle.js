
function placeInMiddle(initialArray, newArray) {
  const lengthInitialArray = initialArray.length;
  const tail = initialArray.splice(lengthInitialArray / 2);
  return [...initialArray, ...newArray, ...tail];
}

export {
  placeInMiddle,
};
