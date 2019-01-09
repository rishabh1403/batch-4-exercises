
function counter() {
  let c = 0;
  return function () {
    c++;
    return c;
  }
}
console.log(counter()());
export {
  counter,
};
