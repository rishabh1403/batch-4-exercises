const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

const readFileContents = () => new Promise((resolve, reject) => {
  fs.readFile('data', 'utf-8', (err, data) => {
    if (err) {
      reject(err);
    }
    const languages = JSON.parse(data).languages;
    resolve(languages);
  });
});

const writeContentToFile = data => new Promise((resolve, reject) => {
  fs.writeFile('data', JSON.stringify(data), (err, data) => {
    if (err) {
      reject(err);
    }
    resolve();
  });
});

const getItemById = (items, id) => items.filter(item => item["id"] === parseInt(id))[0];


router.get('/', (req, res) => {
  readFileContents()
    .then((languages) => {
      res.render('../views/index', {
        languages,
      });
    }).catch((err) => {
      res.sendStatus(500);
    });
})

router.post('/', (req, res) => {
  readFileContents()
    .then((languages) => {
      languages.push({ "name": req.body.name, "id": languages.length });
      const data = {
        languages,
      }
      return writeContentToFile(data);
    }).then(() => {
      res.redirect('/')
    }).catch((err) => {
      res.sendStatus(500);
    });
})

router.get('/new', (req, res) => {
  res.render('../views/new');
})

router.get('/:id/edit', (req, res) => {
  readFileContents()
    .then((languages) => {
      return getItemById(languages, req.params.id);
    }).then((language) => {
      res.render('../views/edit', {
        language,
      });
    }).catch((err) => {
      res.sendStatus(500);
    });
})


module.exports = router;
