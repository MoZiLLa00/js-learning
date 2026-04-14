"use strict";

let num = 0;

// === Вопрос 1: столица (тернарный оператор) ===
const question1 = prompt("Название столицы Бразилии?")?.toLowerCase().trim();

if (question1 === null || question1.trim() === "" || Number.isNaN(question1)) { // проверяем коректность ввода, если вод не коректен выдаем ошибку
    alert("Ошибка: Некоректный ввод.");
    console.warn("Пожалуйста, введите корректный ответ.");
} else {
    question1 === "бразилиа" ? num++ : null;
}

// === Вопрос 2: математика (if/else) ===
const question2 = prompt("2 + 2 * 2 = ...");
if (question2 === null || question1.trim() === "" || Number.isNaN(question2)) { // проверяем коректность ввода, если вод не коректен выдаем ошибку
    alert("Ошибка: Некоректный ввод.");
    console.warn("Пожалуйста, введите корректный ответ.");
} else {
    if (question2 === 6) {
        num++;
    } else {
        num;
    }
}

// === Вопрос 3: загадка (switch) ===
const question3 = prompt("Кто ходит утром на четырёх ногах, днём - на двух, а вечером- на трёх?")?.toLowerCase().trim();
if (question3 === null || question3.trim() === "" || Number.isNaN(question3)) { // проверяем коректность ввода, если вод не коректен выдаем ошибку
    alert("Ошибка: Некоректный ввод.");
    console.warn("Пожалуйста, введите корректный ответ.");
} else {
    switch (question3) {
        case "Человек":
        case "Human":
        case "Homo":
            num++;
            break;
        default:
            num;
    }
}

// === Финальный результат ===
const messages = [
  "💪 Не сдавайся, попробуй ещё!",
  "📚 Повтори материал",
  "👍 Хорошо, но можно лучше",
  "🏆 Отлично! Ты гений!"
];
const message = messages[score] || messages[0]; // защита от выхода за границы массива

console.log(`Правильных ответов: ${score}/3`);
console.log(message);
alert(`${message}\nВаш счёт: ${score}/3`);