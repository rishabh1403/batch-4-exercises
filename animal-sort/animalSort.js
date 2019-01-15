
function animalSort(animals) {
  animals.sort((a, b) => {
    if (a.numberOfLegs !== b.numberOfLegs) {
      return a.numberOfLegs - b.numberOfLegs;
    }
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });
  return animals;
}

export {
  animalSort,
};
