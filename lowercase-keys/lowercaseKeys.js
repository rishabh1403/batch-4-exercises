
function lowercaseKeys(obj) {
  const lowerCaseObjects = {};
  const lowerCaseKeys = Object.keys(obj);
  lowerCaseKeys.forEach((e) => {
    lowerCaseObjects[e.toLowerCase()] = obj[e];
  });
  return lowerCaseObjects;
}

export {
  lowercaseKeys,
};
