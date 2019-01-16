function negate(num) {
  return -num;
}
function not(cond) {
  return !cond;
}
function calculateKey(key, array) {
  if (key < 0) {
    return array.length - negate(key);
  }
  return key;
}

function negativeIndex(array) {
  if (not(Array.isArray(array))) {
    throw new TypeError(/Only arrays are supported/);
  }
  const proxy = new Proxy(array, {
    get(target, key) {
      const newKey = calculateKey(key, target);
      return Reflect.get(target, newKey);
    },
    set(target, key, value) {
      const newKey = calculateKey(key, target);
      return Reflect.set(target, newKey, value);
    },
  });
  return proxy;
}

export {
  negativeIndex,
};
