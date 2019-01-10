
function objectInvert(obj) {
  let x = {};
    for(let i in obj){
        x[obj[i]] = i;
    }
    return x;
}

export {
  objectInvert,
};
