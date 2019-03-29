
function threeSum(arr, sum) {
  if (arr.length < 3 || typeof sum !== 'number') {
    return () => { throw new Error(); };
  }
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = i + 1; j < arr.length; j += 1) {
      for (let k = j + 1; k < arr.length; k += 1) {
        if (arr[i] + arr[j] + arr[k] === sum) {
          return [arr[i], arr[j], arr[k]];
        }
      }
    }
  }

  return null;
}

export {
  threeSum,
};
