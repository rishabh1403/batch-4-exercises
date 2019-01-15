
function simpleIterable() {
  return {
    [Symbol.iterator]() {
      let count = 0;
      return {
        next() {
          count += 1;
          if (count <= 5) {
            return {
              value: count,
              done: false,
            };
          }
          return {
            value: undefined,
            done: true,
          };
        },
      };
    },
  };
}

export {
  simpleIterable,
};
