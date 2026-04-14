"use strict";

// Выбор патерна
const patternSelection = Number(prompt(`Вариант 1: «Лесенка»\nВариант 2: «Обратный отсчёт с пропуском»\nВариант 3: «Таблица умножения»\nВариант 4: «Пирамида»\nНапишите цифру выбранного паттерна:`));

// проверям правильность ввода
if (isNaN(patternSelection) || patternSelection < 1 || patternSelection > 4) {
  console.warn("❌ Неверный ввод. Допустимы только цифры от 1 до 4.");
} else {
  console.log(`✅ Вы выбрали вариант: ${patternSelection}`);
  
  // дальнейшая обработка:
  switch (patternSelection) {
    case 1: {
        const size1 = Number(prompt("Запишите цифрой желаемый размер лесенки:"));
        if (size1 === null || isNaN(size1) || size1 <= 0) {
            alert("Введите положительное число");
            break;
        }
        console.log("Запуск «Лесенки»...");
        let result1 = "";
        for (let i = 1; i <= size1; i++) {
            result1 += "*".repeat(i) + "\n";
        }
        console.log(result1);
        alert(result1);
        break;
    }

    case 2: {
        let size2 = Number(prompt("Введите число для отсчёта:"));
        const skip2 = Number(prompt("Какое число пропустить?"));
        if (size2 === null || isNaN(size2) || skip2 === null || isNaN(skip2)) {
            alert("Введите корректные числа");
            break;
        }
        console.log("Запуск «Обратного отсчёта»...");
        let result2 = "";
        while (size2 > 0) {
            if (size2 === skip2) {
                size2--;
                continue;
            }
            result2 += size2 + "\n";
            size2--;
        }
        result2 += "🚀 Старт!";
        console.log(result2);
        alert(result2);
        break;
    }
        
    case 3: {
        let size3 = Number(prompt("Введите размер таблицы:"));
        if (size3 === null || isNaN(size3) || size3 <= 0) {
            alert("Введите положительное число");
            break;
        }
        console.log("Запуск «Таблицы умножения»...");
        let result3 = "";
        for (let i = 1; i <= size3; i++) {
            let row = "";
            for (let j = 1; j <= size3; j++) {
                row += `${i}×${j}=${i * j}\t`;  // \t — табуляция для выравнивания
            }
            result3 += row + "\n";
        }
        console.log(result3);
        alert(result3);
        break;
    }

    case 4: {
        let size4 = Number(prompt("Введите высоту пирамиды:"));
        if (size4 === null || isNaN(size4) || size4 <= 0) {
            alert("Введите положительное число");
            break;
        }
        console.log("Запуск «Пирамиды»...");
        let result4 = "";
        for (let i = 1; i <= size4; i++) {
            const spaces = " ".repeat(size4 - i);
            const stars = "*".repeat(2 * i - 1);
        result4 += spaces + stars + "\n";
        }
        console.log(result4);
        alert(result4);
        break;
    }
  }
}