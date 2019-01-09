
function counterFactory() {
  let c = 0;
  return {
    increment : function(){
      c++;
      return c;
    },
    decrement : function(){
      c--;
      return c;
    }
  }
}

export {
  counterFactory,
};
