"use strict";

const initialTasks = [
  { id: 1, title: "Изучить JS", done: false, priority: "high" },
  { id: 2, title: "Сделать блок 5", done: false, priority: "medium" },
  { id: 3, title: "Повторить циклы", done: true, priority: "low" },
];

// 1. возвращает новый массив с добавленной задачей
function addTask(title, tasks, priority) {
  let add = [
    ...initialTasks,
    {
      id: initialTasks.length + 1,
      title: title,
      done: tasks,
      priority: priority,
    },
  ];
  return add;
}

// 2. возвращает новый массив, где у задачи с id меняется done
function toggleTask(id) {
  let toggle = [...initialTasks];
  return toggle
    .find((task) => task.id === id)
    .forEach((task) => (task.done === false ? true : false));
}

// 3. возвращает новый массив без задачи
function deleteTask(id) {
  let delet = [...initialTasks];
  return delet.filter((task) => task.id !== id);
}

// 4. фильтрует ("done" / "pending")
function getTasksByStatus(tasks, status) {}

// 5. фильтрует по приоритету
function getTasksByPriority(tasks, priority) {}

// 6. возвращает объект: { total, done, pending, highPriority }
function getStats(tasks) {}

// === Интерактивный запуск ===
const operation = prompt(
  `Выберите операцию:\n1️⃣ Добавить значение\n2️⃣ Изменить статус задачи\n3️⃣ Убрать задачу\n4️⃣ Фильтр\n5️⃣ Фильтр по приоритету\n6️⃣ Объект`,
);

if (operation === null) {
  alert("Ввод отменён");
} else {
  let result;
  switch (operation) {
    case "1": {
      const title = prompt("Напишите название задачи:");
      const tasks = Boolean(
        prompt("Запишите true, если задача выполнена, иначе false"),
      );
      const priority = prompt("Запишите приоритет задачи (high, medium, low):");
      result = addTask(title, tasks, priority);
      break;
    }
    case "2": {
      const id = Number(prompt("Запишите id задачи для изменения:"));
      result = toggleTask(id);
      break;
    }
    case "3": {
      const id = Number(prompt("Запишите id задачи для удаления:"));
      result = deleteTask(id);
      break;
    }
    case "4": {
      result = getTasksByStatus(tasks, status);
      break;
    }
    case "5": {
      result = getTasksByPriority(tasks, priority);
      break;
    }
    case "6": {
      result = getStats(tasks);
      break;
    }
    default:
      result = "❌ Неизвестная операция";
  }

  console.log(`Результат: ${result}`);
  alert(`Результат: ${result}`);
}
