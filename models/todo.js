const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema ({
  text: {type: String, required: true},
  finished: {type: Boolean, required: true, default: false}
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;