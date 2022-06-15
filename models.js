const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema(
  {
    id: String,
    todo: String,
    status: Boolean,
  },
  { collection: 'todos' }
);

const Todo = mongoose.model('Todo', DataSchema);

module.exports = Todo;
