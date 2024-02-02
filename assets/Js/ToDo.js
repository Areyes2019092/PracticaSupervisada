const tasks = [];

function renderTasks() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';

  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.innerHTML = `<span>[${task.priority}]</span> <span id="taskName_${index}" contenteditable="true">${task.name}</span> 
                    <button class="buttonEdit" onclick="editTask(${index})">Editar</button>
                    <button onclick="deleteTask(${index})">Eliminar</button>`;
    taskList.appendChild(li);
  });
}

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskName = taskInput.value.trim();
  const taskPriority = prompt("Prioridad");

  if (taskName !== '' && taskPriority !== null) {
    tasks.push({ name: taskName, priority: taskPriority });
    renderTasks();
    taskInput.value = '';
  } else {
    alert('Invalido');
  }
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

function editTask(index) {
  const newName = prompt("Nombre:", tasks[index].name);
  const newPriority = prompt("Priorida:", tasks[index].priority);

  if (newName !== null && newPriority !== null) {
    tasks[index].name = newName.trim();
    tasks[index].priority = newPriority.trim();
    renderTasks();
  }
}

document.addEventListener('DOMContentLoaded', function () {
  renderTasks();

  const addTaskButton = document.getElementById('addTaskButton');
  addTaskButton.addEventListener('click', addTask);
});
