
function permutateWithRepetitions(arr) {
  const ans = [];
  function permutate(inputs, data, last, index) {
    // eslint-disable-next-line
    let length = inputs.length;
    for (let i = 0; i < length; i += 1) {
      // eslint-disable-next-line
      data[index] = inputs[i];
      if (index === last) {
        // console.log(data);
        const temp = data.map(e => e);
        ans.push(temp);
      } else {
        permutate(inputs, data, last, index + 1);
      }
    }
  }

  permutate(arr, [], arr.length - 1, 0);
  return ans;
}

export {
  permutateWithRepetitions,
};
