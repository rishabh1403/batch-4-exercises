const fs = require('fs');

const getLinesInFile = file => fs.readFileSync(file, 'utf-8').split('\n');

function linesInFile(file) {
  return getLinesInFile(file).length - 1;
}

export {
  linesInFile,
};
