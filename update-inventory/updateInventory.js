
function updateInventory(arr1,arr2) {
  let obj = {};
  arr1.forEach(e => {
    obj[e[1]] = e[0];
  });
  arr2.forEach(e => {
    if(obj[e[1]]){
      obj[e[1]] = obj[e[1]] + e[0];
    }else{
      obj[e[1]] = e[0];
    }
    
  });
  // console.log(obj);
  let ans = [];
  for(let i in obj){
    ans.push([obj[i],i])
  }
  // console.log(ans);
  ans.sort(function(a, b){
    if(a[1] < b[1]) { return -1; }
    if(a[1] > b[1]) { return 1; }
    return 0;
})
  return ans;
}

export {
  updateInventory,
};
