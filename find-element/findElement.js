
function findElement(arr,cb) {
  let a =  arr.filter(cb);
  return a[0];
}

export {
  findElement,
};
