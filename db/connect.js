const mongoose = require('mongoose');

require('dotenv').config({ path: './.env' });

const uri = process.env.MONGO_DB_URI;
const connect = () => {
  return mongoose.connect(uri, {
    user: process.env.MONGO_DB_USER,
    pass: process.env.MONGO_DB_PASSWORD,
    dbName: 'sample_todos',
  });
};
mongoose.connection.on('connected', function (err) {
  console.log('Connected to DataBase');
});

// Error handler
mongoose.connection.on('error', function (err) {
  console.log(err);
});

module.exports = connect;
