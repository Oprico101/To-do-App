const newTaskInput = document.getElementById('newTask');
const addButton = document.getElementById('addButton');
const todoList = document.getElementById('todoList');

// Add a new task to the list when the "Add" button is clicked
addButton.addEventListener('click', () => {
  const newTask = newTaskInput.value;

  // Create a new list item element
  const listItem = document.createElement('li');
  listItem.textContent = newTask;

  // Add a "Completed" button to the list item
  const completedButton = document.createElement('button');
  completedButton.textContent = 'Completed';
  completedButton.addEventListener('click', () => {
    listItem.classList.toggle('completed');
  });

  // Add a "Delete" button to the list item

  
const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', () => {
    listItem.remove();
  });

  // Append the list item to the to-do list
  listItem.appendChild(completedButton);
  listItem.appendChild(deleteButton);
  todoList.appendChild(listItem);

  // Clear the input field
  newTaskInput.value = '';
});

// Mark a task as completed when it is clicked
todoList.addEventListener('click', (event) => {
  const target = event.target;

  if (target.tagName === 'LI') {
    target.classList.toggle('completed');
  }
});