let tasks = [
  {
    _id: '1',
    title: 'Learn Docker',
    completed: false,
  },
  {
    _id: '2',
    title: 'Build MERN App',
    completed: true,
  },
];

// Get all tasks
const getTasks = async (req, res) => {
  res.status(200).json(tasks);
};

// Create task
const createTask = async (req, res) => {
  const { title } = req.body;

  const newTask = {
    _id: Date.now().toString(),
    title,
    completed: false,
  };

  tasks.push(newTask);

  res.status(201).json(newTask);
};

// Update task
const updateTask = async (req, res) => {
  const { id } = req.params;

  tasks = tasks.map((task) =>
    task._id === id
      ? { ...task, completed: !task.completed }
      : task
  );

  const updatedTask = tasks.find((task) => task._id === id);

  res.status(200).json(updatedTask);
};

// Delete task
const deleteTask = async (req, res) => {
  const { id } = req.params;

  tasks = tasks.filter((task) => task._id !== id);

  res.status(200).json({
    message: 'Task deleted successfully',
  });
};

module.exports = {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
};