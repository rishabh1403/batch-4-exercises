
function objectPairs(obj) {
  let x = [];
  for (let i in obj) {
    let temp = [i, obj[i]];
    x.push(temp);
  }
  return x;
}

export {
  objectPairs,
};
