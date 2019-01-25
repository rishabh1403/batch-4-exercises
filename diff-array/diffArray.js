const not = cond => !cond;

const notInArray = (arr, el) => not(arr.includes(el));

function diffArray(arr1, arr2) {
  return arr1.filter(el => notInArray(arr2, el)).concat(arr2.filter(el => notInArray(arr1, el)));
}

export {
  diffArray,
};
