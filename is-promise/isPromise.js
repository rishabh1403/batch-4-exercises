
function isPromise(checkPromise) {
  return Promise.resolve(checkPromise) === checkPromise;
}

export {
  isPromise,
};
