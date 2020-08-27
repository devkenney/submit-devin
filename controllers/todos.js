const express = require('express');
const router = express.Router();
const Todo = require('../models/todo.js');

// Index
router.get('/', (req, res) => {
  Todo.find({}, (error, allTodos) => {
    // Error handling goes here
    // TODO: In the future, I would put some error handling here

    res.render('Index', {
      todos: allTodos
    });
  });
});

// New


// Destroy
router.delete('/:id', (req, res) => {
  Todo.findByIdAndDelete(req.params.id, (error) => {
    res.redirect('/todos');
  });
});

// Update


// Create
router.post('/', (req, res) => {
  Todo.create(req.body, (error, createdTodo) => {
    res.redirect('/todos');
  });
});

// Edit


// Show


module.exports = router;