
function objectKeys(obj) {
  let x = [];
    for(let i in obj){
        x.push(i)
    }
    return x;
}

export {
  objectKeys,
};
