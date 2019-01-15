function isNumber(num) {
  return typeof num === 'number';
}
function not(cond) {
  return !cond;
}

function arrayCubeRootToJson(listOfCubes) {
  const isEveryElementNumber = listOfCubes.every(isNumber);
  if (not(isEveryElementNumber)) {
    throw new Error();
  }
  return listOfCubes.reduce((acc, el) => {
    const key = el.toString();
    return {
      ...acc,
      [key]: Math.cbrt(el),
    };
  }, {});
}

export {
  arrayCubeRootToJson,
};
