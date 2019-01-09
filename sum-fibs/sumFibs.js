function sumFibs(n) {
  var a = 0, b = 1, c = 1;
  var sum = b;
  for (var i = 0;; i++) {
    c = a + b;
    a = b;
    b = c;
    if(c%2 !== 0 && c< n){
      sum += c
    }
    if(c>= n) break;
  }
  return sum;
}

export {
  sumFibs,
};
