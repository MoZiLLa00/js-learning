"use strict";

const initialTasks = [
  { id: 1, title: "Изучить JS", done: false, priority: "high" },
  { id: 2, title: "Сделать блок 5", done: false, priority: "medium" },
  { id: 3, title: "Повторить циклы", done: true, priority: "low" },
];

// 1. возвращает новый массив с добавленной задачей
function addTask(tasks, title, priority) {
  // Находим максимальный id + 1 для нового
  const newId = tasks.length > 0 ? Math.max(...tasks.map((t) => t.id)) + 1 : 1;
  // Возвращаем НОВЫЙ массив: старый + новая задача
  return [
    ...tasks,
    { id: newId, title: title, done: false, priority: priority },
  ];
}

// 2. возвращает новый массив, где у задачи с id меняется done
function toggleTask(tasks, id) {
  return tasks.map((task) =>
    task.id === id ? { ...task, done: !task.done } : task,
  );
}

// 3. возвращает новый массив без задачи
function deleteTask(tasks, id) {
  return tasks.filter((task) => task.id !== id);
}

// 4. фильтрует ("done" / "pending")
function getTasksByStatus(tasks, stat) {
  const isDone = stat === "done";
  return tasks.filter((task) => task.done === isDone);
}

// 5. фильтрует по приоритету
function getTasksByPriority(tasks, priority) {
  return tasks.filter((task) => task.priority === priority);
}

// 6. возвращает объект: { total, done, pending, highPriority }
function getStats(tasks) {
  return tasks.reduce(
    (stats, task) => {
      return {
        total: stats.total + 1,
        done: stats.done + (task.done ? 1 : 0),
        pending: stats.pending + (task.done ? 0 : 1),
        highPriority: stats.highPriority + (task.priority === "high" ? 1 : 0),
      };
    },
    { total: 0, done: 0, pending: 0, highPriority: 0 },
  );
}

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
      const priority = prompt("Запишите приоритет задачи (high, medium, low):");
      result = addTask(initialTasks, title, priority);
      break;
    }
    case "2": {
      const id = Number(prompt("Запишите id задачи для изменения:"));
      result = toggleTask(initialTasks, id);
      break;
    }
    case "3": {
      const id = Number(prompt("Запишите id задачи для удаления:"));
      result = deleteTask(initialTasks, id);
      break;
    }
    case "4": {
      const stat = prompt("Введите статус (done/pending):");
      result = getTasksByStatus(initialTasks, stat);
      break;
    }
    case "5": {
      const priority = prompt("Введите приоритет (high/medium/low):");
      result = getTasksByPriority(initialTasks, priority);
      break;
    }
    case "6": {
      result = getStats(initialTasks);
      break;
    }
    default: {
      result = "❌ Неизвестная операция";
    }
  }

  console.log(result);
  alert(JSON.stringify(result, null, 2));
}
