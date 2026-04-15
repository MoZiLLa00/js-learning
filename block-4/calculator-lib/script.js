"use strict";

// Часть 1: Базовые функции (объявление + выражение)
// 1. Функция-объявление: сложение
function add(a, b) {
  return a + b;
}

// 2. Функция-выражение: вычитание
const subtract = function (a, b) {
  return a - b;
};

// 3. Стрелочная функция: умножение
const multiply = (a, b) => {
  return a * b;
};

// 4. Стрелочная функция в короткой форме: деление
const divide = (a, b) => (b !== 0 ? a / b : null);

// Часть 2: Функция с параметрами по умолчанию и валидацией
function calculate(a, b, operation = add) {
  if (isNaN(a) || isNaN(b)) return "Ошибка: введите числа";
  if (operation === divide && b === 0) return "Ошибка: деление на ноль";
  const result = operation(a, b);
  return result ?? "❌ Ошибка: неизвестная операция";
}

// Часть 3: Функция высшего порядка (колбэк)
function applyOperation(a, b, operationFn) {
  return operationFn(a, b);
}

// Часть 4: Утилита с rest-параметрами
function calculateAverage(...numbers) {
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  return sum / numbers.length;
}

// Часть 5: Интерактивный запуск (опционально, для теста)
// === Часть 5: Интерактивный запуск ===
const operation = prompt(
  `Выберите операцию:\n1️⃣ Сложение (+)\n2️⃣ Вычитание (-)\n3️⃣ Умножение (×)\n4️⃣ Деление (÷)\n5️⃣ Возведение в степень (**)\n6️⃣ Среднее арифметическое`,
);

if (operation === null) {
  alert("Ввод отменён");
} else {
  const a = Number(prompt("Введите первое число:"));
  const b = Number(prompt("Введите второе число:"));

  let result;
  switch (operation) {
    case "1":
      result = calculate(a, b, add);
      break;
    case "2":
      result = calculate(a, b, subtract);
      break;
    case "3":
      result = calculate(a, b, multiply);
      break;
    case "4":
      result = calculate(a, b, divide) ?? "Ошибка";
      break;
    case "5":
      result = applyOperation(a, b, (x, y) => x ** y);
      break;
    case "6":
      // Для среднего запрашиваем больше чисел
      const extra = prompt("Введите ещё числа через запятую (необязательно):");
      const numbers = [a, b, ...(extra ? extra.split(",").map(Number) : [])];
      result = calculateAverage(...numbers.filter((n) => !isNaN(n)));
      break;
    default:
      result = "❌ Неизвестная операция";
  }

  console.log(`[CALC] Результат: ${result}`);
  alert(`Результат: ${result}`);
}
