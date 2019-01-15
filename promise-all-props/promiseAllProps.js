
function promiseAllProps(props) {
  return new Promise((resolve) => {
    const keys = Object.keys(props);
    const values = Object.values(props);
    Promise.all(values)
      .then((resolvedData) => {
        resolve(resolvedData.reduce((acc, el, index) => {
          const key = keys[index];
          return {
            ...acc,
            [key]: el,
          };
        }, {}));
      });
  });
}

export {
  promiseAllProps,
};
