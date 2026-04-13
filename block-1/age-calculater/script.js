"use strict";

const currentYear = 2026; // записываем все переменные с указанием типа
let yearOfBirth = 0;
let age = 0;

yearOfBirth = Number(prompt("Какой у вас год рождения?")); // просим пользователя написать его год рождения

if (!yearOfBirth || Number.isNaN(yearOfBirth)) { // проверяем коректность ввода, если вод не коректен выдаем ошибку
    alert("Ошибка: Введите год рождения");
    console.warn("Не правльно введен год рождения");
} else if (input === null || input.trim() === "" || Number.isNaN(yearOfBirth)) {
  console.warn("Пользователь отменил ввод или ввёл нечисловое значение");
  alert("Пожалуйста, введите корректный год рождения");
} else {
    age = currentYear - yearOfBirth; // вычислили примерный возраст
    console.log(`Вам примерно ${age} лет.`); // выводим результат
}
