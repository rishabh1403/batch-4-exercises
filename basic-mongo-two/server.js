const app = require('express')();
const bodyParser = require('body-parser');

const mongo = require('mongodb');

const { MongoClient } = mongo;
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'pesto';

const dbConnection = new Promise((resolve, reject) => {
  MongoClient.connect(url, (err, client) => {
    if (err) {
      reject(err);
    }
    console.log('Connected successfully to server'); // eslint-disable-line

    const collection = client.db(dbName).collection('projects');
    resolve(collection);
    // client.close();
  });
});

app.use(bodyParser.urlencoded());

app.get('/projects', (req, res) => {
  dbConnection
    .then(collection => collection.find().toArray())
    .then(data => res.json(data))
    .catch(error => res.status(500).send(error));
});

app.get('/projects/:id', (req, res) => {
  const { id } = req.params;
  dbConnection
    .then(collection => collection.findOne({ _id: mongo.ObjectId(id) }))
    .then(data => res.json(data))
    .catch(error => res.status(500).send(error));
});

app.post('/projects', (req, res) => {
  const { developer, project } = req.body;
  dbConnection
    .then(collection => collection.insertOne({ developer, project }))
    .then(record => res.json(record))
    .catch(error => res.status(500).send(error));
});

app.put('/projects/:id', (req, res) => {
  const { id } = req.params;
  const { developer, project } = req.body;
  dbConnection
    .then((collection) => {
      return collection.updateOne({ _id: mongo.ObjectId(id) }, { $set: { developer, project } });
    })
    .then(record => res.json(record))
    .catch(error => res.status(500).send(error));
});

app.delete('/projects/:id', (req, res) => {
  const { id } = req.params;
  dbConnection
    .then(collection => collection.deleteOne({ _id: mongo.ObjectId(id) }))
    .then(() => res.sendStatus(200))
    .catch(error => res.status(500).send(error));
});

app.listen('3000', () => console.log('server listening on 3000')); // eslint-disable-line
