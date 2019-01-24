
function limitFunctionCallCount(fn, callCount) {
  let count = 0;
  return (...args) => {
    if (count < callCount) {
      count += 1;
      return fn(...args);
    }
    return null;
  };
}

export {
  limitFunctionCallCount,
};
