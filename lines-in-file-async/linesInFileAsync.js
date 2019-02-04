const fs = require('fs');

const getLinesInFile = file => file.split('\n');

function linesInFileAsync(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, 'utf-8', (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(getLinesInFile(data).length - 1);
    });
  });
}

export {
  linesInFileAsync,
};
