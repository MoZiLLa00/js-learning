// src/tasks/state.js

// 📦 Состояние хранится внутри модуля (не доступно снаружи напрямую)
let tasks = [];
let nextId = 1;

// ➕ Добавление задачи
export function addTask(title, priority) {
  const newTask = { id: nextId++, title, priority, done: false };
  tasks.push(newTask);
  return newTask;
}

// 🔄 Получение копии массива (защита от мутаций снаружи)
export function getTasks() {
  return [...tasks];
}

// 🗑️ Удаление по ID
export function removeTask(id) {
  tasks = tasks.filter((t) => t.id !== id);
}

// ✅ Переключение статуса
export function toggleTask(id) {
  const task = tasks.find((t) => t.id === id);
  if (task) task.done = !task.done;
}
