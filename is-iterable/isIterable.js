
function isIterable(checkIterable) {
  // console.log(typeof checkIterable[Symbol.iterator]);
  return (typeof checkIterable[Symbol.iterator] === 'function');
}

export {
  isIterable,
};
