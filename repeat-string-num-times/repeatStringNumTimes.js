
function repeatStringNumTimes(str, n) {
  if(n<1){
    return '';
  }else{
    let ans = '';
    for(let i=1;i<=n;i++) ans += str;
    return ans;
  }
}

export {
  repeatStringNumTimes,
};
