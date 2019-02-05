const app = require('express')();

app.use((req, res, next) => {
  console.log('Time:', Date.now()); // eslint-disable-line no-console
  res.setHeader('middleware-header', req.path);
  next();
});

app.get('/', (req, res) => {
  res.send('hello');
});

app.get('/languages', (req, res) => {
  const languages = {
    languages: ['javascript', 'golang', 'dart', 'java', 'c++'],
  };
  res.json(languages);
});

app.get('/packages', (req, res) => {
  const packages = {
    packages: ['express', 'body-parser', 'bcrypt', 'moment', 'redux'],
  };
  res.json(packages);
});

app.listen('3000', () => console.log('server listening on 3000')); // eslint-disable-line no-console
