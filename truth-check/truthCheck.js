
function truthCheck(arr,key) {
  let flag = true;
  arr.forEach(e => {
    
    if(!e[key]){
      flag = false;
    }
  });
  return flag;
}

export {
  truthCheck,
};
