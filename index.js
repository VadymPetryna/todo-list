// Get the input field
const taskInput = document.getElementById('taskInput');

const addTask = (task) => {
  const el = document.createElement('div');
  el.innerText = task.description;
  el.className = 'task';
  document.getElementById('tasks').appendChild(el);
};

const createTask = () => {
  const inputValue = taskInput.value;
  const task = {
    status: false,
    description: inputValue,
  };

  addTask(task);

  taskInput.value = '';
};

// Execute a function when the user presses a key on the keyboard
taskInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter' && taskInput.value) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById('addTask').click();
  }
});
