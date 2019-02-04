const sanitizePath = (path) => {
  const pathArray = path.split('/');
  return pathArray.filter((el, index) => el !== '..' && pathArray[index + 1] !== '..').join('/');
};

function stripPath(path, pathToStrip) {
  if (!pathToStrip) {
    return path;
  }
  return sanitizePath(path).replace(`${sanitizePath(pathToStrip)}/`, '');
}

export {
  stripPath,
};
