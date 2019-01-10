
function objectValues(obj) {
  let x = [];
    for(let i in obj){
        x.push(obj[i])
    }
    return x;
}

export {
  objectValues,
};
