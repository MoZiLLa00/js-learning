// src/main.js
import { addTask, getTasks } from "./tasks/state.js";

console.log("🚀 Приложение запущено");

// Тест
addTask("Изучить модули", "high");
addTask("Настроить Vite", "medium");

// Вывод в консоль для проверки
console.log("Задачи:", getTasks());
