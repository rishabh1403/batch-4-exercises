
function onChange(detectChange, cb) {
  // if (not(Array.isArray(array))) {
  //   throw new TypeError(/Only arrays are supported/);
  // }
  const proxy = new Proxy(detectChange, {
    set() {
      cb();
      return true;
    },
    defineProperty() {
      cb();
      return true;
    },
    deleteProperty() {
      cb();
      return true;
    },
  });
  return proxy;
}

export {
  onChange,
};
