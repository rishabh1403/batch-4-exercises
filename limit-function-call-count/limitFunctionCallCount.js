
function limitFunctionCallCount(fn, callCount) {
  let counter = 0;
  return (...args) => {
    if (counter < callCount) {
      counter += 1;
      return fn(...args);
    }
    return null;
  };
}

export {
  limitFunctionCallCount,
};
