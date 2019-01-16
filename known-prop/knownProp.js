
function knownProp(prop) {
  const proxy = new Proxy(prop, {
    get(target, key) {
      if (Object.prototype.hasOwnProperty.call(target, key)) {
        return target[key];
      }
      throw new TypeError(/Only arrays are supported/);
    },
  });
  return proxy;
}

export {
  knownProp,
};
