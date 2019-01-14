
function mapFilterAndReduce(names) {
  return names.map(el => el.firstName)
    .filter(el => el.length < 5)
    .reduce((acc, el) => {
      // console.log(el);
      const newEntry = {};
      newEntry[el] = el.length;
      return {
        ...acc,
        ...newEntry,
      };
    }, {});
}

export {
  mapFilterAndReduce,
};
