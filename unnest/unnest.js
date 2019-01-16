
function unnest(list) {
  if (!Array.isArray(list)) {
    // eslint-disable-next-line
    list = Object.values(list).filter(el => Array.isArray(el));
  }
  return list.reduce((acc, el) => {
    if (Array.isArray(el)) {
      return [...acc, ...el];
    }
    return [...acc, el];
  }, []);
}

export {
  unnest,
};
