
function getIndexToIns(arr, n) {
  arr.sort((a,b) => a-b);
  for(let i=0;i<arr.length;i++){
    if(arr[i]>=n){
      return i
    }
  }
  return arr.length;
}

export {
  getIndexToIns,
};
