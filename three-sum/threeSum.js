
function threeSum(arr, sum) {
  // let ans = [];
  // arr.sort();
  if(arr.length <3 || typeof sum !== 'number'){
    return () => { throw new Error() };
  }
  for (let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
      for(let k=j+1;k<arr.length;k++){
        if(arr[i]+arr[j]+arr[k] === sum){
          return [arr[i],arr[j],arr[k]];
        }
      }
    }
  }
  
  return null;
}

export {
  threeSum,
};
