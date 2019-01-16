
function searchSortedMatrix({ search, matrix }) {
  for (const i of matrix) {
    for (const j of i) {
      if (j > search) {
        return false;
      }
      if (j === search) {
        return true;
      }
    }
  }
  return false;
}

export {
  searchSortedMatrix,
};
