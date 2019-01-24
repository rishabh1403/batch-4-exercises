
function cacheFunction(callback) {
  const map = new Map();
  return (args) => {
    if (map.has(args)) {
      return map.get(args);
    }
    map.set(args, callback(args));
    return map.get(args);
  };
}

export {
  cacheFunction,
};
