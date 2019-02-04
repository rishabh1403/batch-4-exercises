const fs = require('fs');

function filteredNames(directory, fileExtension) {
  return fs.readdirSync(directory).filter(file => file.endsWith(`.${fileExtension}`));
}

export {
  filteredNames,
};
