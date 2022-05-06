document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.getElementById('create-task-form').addEventListener('submit', (e) => {
    e.preventDefault();
    addTask(document.getElementById('new-task-description').value);
  })

  function addTask(task) {
    const list = document.getElementById('tasks');
    const listItem = document.createElement('li');
    listItem.textContent = task;
    const button = document.createElement('button');
    button.textContent = 'x';
    button.addEventListener('click', deleteTask);
    listItem.appendChild(button);
    list.appendChild(listItem);
  }

  function deleteTask(e) {
    e.target.parentNode.remove();
  }
});
