
function timeout(word) {
  return new Promise(resolve => resolve(`Hey ${word}`));
}

export {
  timeout,
};
