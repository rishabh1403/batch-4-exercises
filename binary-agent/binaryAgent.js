function binaryAgent(str) {
  let arr = str.split(' ');
  let s ='';
  arr.forEach(e => {
    s = s + String.fromCharCode(parseInt(e,2));
  });
  // console.log(s);
  return s;
}

export {
  binaryAgent,
};
