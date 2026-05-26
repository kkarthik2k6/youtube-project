const express = require('express');

const {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} = require('../controllers/taskController');

const router = express.Router();

// GET all tasks
router.get('/', getTasks);

// CREATE task
router.post('/', createTask);

// UPDATE task
router.put('/:id', updateTask);

// DELETE task
router.delete('/:id', deleteTask);

module.exports = router;