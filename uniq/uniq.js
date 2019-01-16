
function uniq(list) {
  return list.reduce((acc, el) => {
    if (acc.indexOf(el) !== -1) {
      return acc;
    }
    return [...acc, el];
  }, []);
}

export {
  uniq,
};
