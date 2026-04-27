"use strict";

// СОСТОЯНИЕ (State) — источник правды
let tasks = [];
let currentFilter = "all";
let nextId = 1;

// ЭЛЕМЕНТЫ DOM
const form = document.querySelector("#task-form");
const input = document.querySelector("#task-input");
const list = document.querySelector("#task-list");
const counter = document.querySelector("#counter-value");
const filterBtn = document.querySelectorAll(".btn-filter");

// Добавление задачи
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = input.value.trim();
  if (!text) return;

  tasks.unshift({ id: nextId++, text, done: false });
  input.value = "";
  input.focus();
  renderTasks();
});

// Фильтры
filterBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    currentFilter = btn.dataset.filter;
    updateFilterUI();
    renderTasks();
  });
});

// Рендер (отрисовка списка)
function renderTasks() {
  list.innerHTML = "";

  // Фильтруем задачи
  const filtered = tasks.filter((task) => {
    if (currentFilter === "all") return true;
    if (currentFilter === "active") return !task.done;
    if (currentFilter === "done") return task.done;
  });

  // Создаём элементы для каждой отфильтрованной задачи
  filtered.forEach((task) => {
    const li = document.createElement("li");
    li.classList.add("task-item");
    li.dataset.id = task.id;
    if (task.done) li.classList.add("done");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.done;
    checkbox.addEventListener("change", () => toggleTask(task.id));

    const span = document.createElement("span");
    span.classList.add("task-text");
    span.textContent = task.text;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "🗑️";
    deleteBtn.classList.add("btn-delete");
    deleteBtn.addEventListener("click", () => deleteTask(task.id));

    li.append(checkbox, span, deleteBtn);
    list.append(li);
  });

  updateCounter();
}

// Переключение статуса
function toggleTask(id) {
  const task = tasks.find((t) => t.id === id);
  if (task) task.done = !task.done;
  renderTasks();
}

// Удаление
function deleteTask(id) {
  tasks = tasks.filter((t) => t.id !== id);
  renderTasks();
}

// Обновление кнопок фильтров
function updateFilterUI() {
  filterBtn.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.filter === currentFilter);
  });
}

// Обновление счётчика
function updateCounter() {
  const activeCount = tasks.filter((t) => !t.done).length;
  counter.textContent = activeCount;
}

// Первичная отрисовка при загрузке
renderTasks();
