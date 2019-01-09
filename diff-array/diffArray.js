
function diffArray(a,b) {
  let ans=[];
  for(let i=0;i<a.length;i++){
    if(b.indexOf(a[i]) === -1) ans.push(a[i])
  }
  for(let i=0;i<b.length;i++){
    if(a.indexOf(b[i]) === -1) ans.push(b[i])
  }
  return ans;
}

export {
  diffArray,
};
