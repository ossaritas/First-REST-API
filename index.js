const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Collection = require('./models');
const connect = require('./db/connect');

const app = express();

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/api/todo', async (req, res) => {
  const docs = await Collection.find({}, { _id: 0 }).exec();

  res.send({ data: docs }).end();
});

app.get('/api/todo/:id', async (req, res) => {
  const todo = await Collection.findOne({ id: req.params.id }).exec();
  res.json({ todo: todo }).end();
});

const PORT = process.env.PORT || 3000;
connect().then(
  app.listen(PORT, () => console.log(`Data-app listening on PORT ${PORT}!`))
);
