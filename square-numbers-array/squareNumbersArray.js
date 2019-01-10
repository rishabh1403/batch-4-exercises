
function squareNumbersArray(...args) {
  let flag = true;
  args.forEach(element => {
    // console.log(typeof element);
    if(typeof element !== 'number'){
      flag = false;
    }
  });
  if(!flag){
    // console.log("Here");
    throw new Error('My custom error')
  }
  return true;
}

export {
  squareNumbersArray,
};
