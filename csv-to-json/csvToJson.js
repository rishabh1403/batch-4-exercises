// TODO refactor code here
const fs = require('fs');

function csvToJson(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, 'utf-8', (err, data) => {
      if (err) {
        reject(err);
      }
      const [title, ...values] = data.split('\n');
      const titleArray = title.split(',');

      const ans = values.map((value) => {
        const names = value.split(',');
        return names.reduce((acc, el, index) => ({
          ...acc,
          [titleArray[index]]: el,
        }), {});
      });

      resolve(ans);
    });
  });
}

export {
  csvToJson,
};
