
function cacheFunction(fn) {
  const map = new Map();
  return (args) => {
    if (map.has(args)) {
      return map.get(args);
    }
    map.set(args, fn(args));
    return map.get(args);
  };
}

export {
  cacheFunction,
};
