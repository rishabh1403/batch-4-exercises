
function mergeAll(objectArrayToMerge) {
  return objectArrayToMerge.reduce((acc, el) => ({ ...acc, ...el }), {});
}

export {
  mergeAll,
};
