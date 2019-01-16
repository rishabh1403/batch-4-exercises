
function tiles({ small, big, target }) {
  const bigBlocks = target / 5;
  let smallBlocks = target % 5;
  if (bigBlocks <= big && smallBlocks <= small) {
    return true;
  }
  if (bigBlocks > big) {
    smallBlocks += ((bigBlocks - big) * 5);
    if (smallBlocks <= small) {
      return true;
    }
  }
  return false;
}

export {
  tiles,
};
