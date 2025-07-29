// Background styling
document.body.style.backgroundImage = "url('https://static.vecteezy.com/system/resources/previews/025/896/293/large_2x/to-do-list-icon-with-hand-drawn-text-seamless-pattern-background-business-flat-illustration-checklist-task-list-symbol-pattern-vector.jpg')";
document.body.style.backgroundSize = "cover";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundAttachment = "fixed";
document.body.style.margin = "0";
document.body.style.fontFamily = 'Arial, sans-serif';

// Main container
const container = document.createElement('div');
container.style.maxWidth = '500px';
container.style.margin = '50px auto';
container.style.padding = '20px';
container.style.background = 'rgba(255, 255, 255, 0.95)';
container.style.borderRadius = '10px';
container.style.boxShadow = '0 0 10px rgba(0,0,0,0.2)';
document.body.appendChild(container);

// Title
const title = document.createElement('h2');
title.innerText = '📝 To-Do Application';
title.style.textAlign = 'center';
container.appendChild(title);

// Input field & Add button
const input = document.createElement('input');
input.placeholder = 'Enter your task';
input.style.width = '70%';
input.style.padding = '10px';
input.style.marginRight = '10px';
input.style.borderRadius = '5px';
input.style.border = '1px solid #ccc';

const addBtn = document.createElement('button');
addBtn.innerText = 'ADD +';
addBtn.style.padding = '10px 15px';
addBtn.style.borderRadius = '5px';
addBtn.style.border = 'none';
addBtn.style.background = '#28a745';
addBtn.style.color = 'white';
addBtn.style.fontWeight = 'bold';
addBtn.style.cursor = 'pointer';

container.appendChild(input);
container.appendChild(addBtn);

// Sections
const pendingSection = document.createElement('div');
const completedSection = document.createElement('div');
const deletedSection = document.createElement('div');

container.appendChild(pendingSection);
container.appendChild(completedSection);
container.appendChild(deletedSection);

// Task storage
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
let deletedTasks = JSON.parse(localStorage.getItem('deletedTasks')) || [];

function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
  localStorage.setItem('deletedTasks', JSON.stringify(deletedTasks));
}

function renderTasks() {
  pendingSection.innerHTML = `<h3>🕐 Pending Tasks</h3>`;
  completedSection.innerHTML = `<h3>✅ Completed Tasks</h3>`;
  deletedSection.innerHTML = `<h3>🗑️ Deleted Tasks</h3>`;

  const sortedTasks = [...tasks].sort((a, b) => b.id - a.id);

  sortedTasks.forEach(task => {
    const taskRow = document.createElement('div');
    taskRow.style.display = 'flex';
    taskRow.style.justifyContent = 'space-between';
    taskRow.style.alignItems = 'center';
    taskRow.style.marginBottom = '8px';
    taskRow.style.padding = '8px';
    taskRow.style.borderRadius = '5px';
    taskRow.style.background = task.completed ? '#e6ffe6' : '#f9f9f9';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    checkbox.addEventListener('change', () => {
      task.completed = !task.completed;
      saveTasks();
      renderTasks();
    });

    const taskText = document.createElement('span');
    taskText.innerText = task.text;
    taskText.style.flex = '1';
    taskText.style.marginLeft = '10px';
    taskText.style.textDecoration = task.completed ? 'line-through' : 'none';

    taskRow.appendChild(checkbox);
    taskRow.appendChild(taskText);

    // ✏️ Edit (only pending)
    if (!task.completed) {
      const editBtn = document.createElement('button');
      editBtn.innerText = 'Edit';
      editBtn.style.background = '#ffa500';
      editBtn.style.color = 'white';
      editBtn.style.border = 'none';
      editBtn.style.marginLeft = '10px';
      editBtn.style.padding = '5px 10px';
      editBtn.style.borderRadius = '5px';
      editBtn.style.cursor = 'pointer';
      editBtn.addEventListener('click', () => {
        const newText = prompt('Edit task:', task.text);
        if (newText && newText.trim()) {
          task.text = newText.trim();
          saveTasks();
          renderTasks();
        }
      });
      taskRow.appendChild(editBtn);
    }

    // ❌ Delete button (both pending & completed)
    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.style.background = '#dc3545';
    deleteBtn.style.color = 'white';
    deleteBtn.style.border = 'none';
    deleteBtn.style.marginLeft = '10px';
    deleteBtn.style.padding = '5px 10px';
    deleteBtn.style.borderRadius = '5px';
    deleteBtn.style.cursor = 'pointer';
    deleteBtn.addEventListener('click', () => {
      deletedTasks.push({ ...task });
      tasks = tasks.filter(t => t.id !== task.id);
      saveTasks();
      renderTasks();
    });
    taskRow.appendChild(deleteBtn);

    if (task.completed) {
      completedSection.appendChild(taskRow);
    } else {
      pendingSection.appendChild(taskRow);
    }
  });

  // 🗑️ Deleted Tasks
  deletedTasks.forEach(task => {
    const row = document.createElement('div');
    row.style.display = 'flex';
    row.style.justifyContent = 'space-between';
    row.style.alignItems = 'center';
    row.style.marginBottom = '8px';
    row.style.padding = '8px';
    row.style.borderRadius = '5px';
    row.style.background = '#ffe6e6';

    const taskText = document.createElement('span');
    taskText.innerText = task.text;
    taskText.style.flex = '1';

    const restoreBtn = document.createElement('button');
    restoreBtn.innerText = 'Restore';
    restoreBtn.style.background = '#007bff';
    restoreBtn.style.color = 'white';
    restoreBtn.style.border = 'none';
    restoreBtn.style.padding = '5px 10px';
    restoreBtn.style.marginRight = '5px';
    restoreBtn.style.borderRadius = '5px';
    restoreBtn.style.cursor = 'pointer';

    restoreBtn.addEventListener('click', () => {
      task.completed = false;
      tasks.push(task);
      deletedTasks = deletedTasks.filter(t => t.id !== task.id);
      saveTasks();
      renderTasks();
    });

    const permDeleteBtn = document.createElement('button');
    permDeleteBtn.innerText = 'Delete';
    permDeleteBtn.style.background = '#000';
    permDeleteBtn.style.color = 'white';
    permDeleteBtn.style.border = 'none';
    permDeleteBtn.style.padding = '5px 10px';
    permDeleteBtn.style.borderRadius = '5px';
    permDeleteBtn.style.cursor = 'pointer';

    permDeleteBtn.addEventListener('click', () => {
      deletedTasks = deletedTasks.filter(t => t.id !== task.id);
      saveTasks();
      renderTasks();
    });

    row.appendChild(taskText);
    row.appendChild(restoreBtn);
    row.appendChild(permDeleteBtn);
    deletedSection.appendChild(row);
  });
}

// Add task
addBtn.addEventListener('click', () => {
  const taskText = input.value.trim();
  if (!taskText) return;
  tasks.push({ id: Date.now(), text: taskText, completed: false });
  input.value = '';
  saveTasks();
  renderTasks();
});

// Initial render
renderTasks();
