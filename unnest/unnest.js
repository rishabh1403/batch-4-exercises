
function unnest(list) {
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
