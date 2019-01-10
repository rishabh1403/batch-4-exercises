
function objectDefaults(obj1, obj2) {
  for(let i in obj2){
    if(!obj1[i]){
      obj1[i] = obj2[i]
    }
  }
  return obj1;
}

export {
  objectDefaults,
};
