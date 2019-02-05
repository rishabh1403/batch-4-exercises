const express = require('express');

const app = express();

app.set('view engine', 'ejs');

const languages = ['JavaScript', 'Haskell', 'Python', 'Go Lang', 'Dart'];

app.get('/', (req, res) => {
  res.render('../views/index', {
    languages,
  });
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
