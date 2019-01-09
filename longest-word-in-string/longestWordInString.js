
function longestWordInString(s) {
  let str = s.split(" ");
  let len =0 ;
  str.forEach(element => {
    if(element.length > len){
      len = element.length
    }
  });
  return len;
}

export {
  longestWordInString,
};
