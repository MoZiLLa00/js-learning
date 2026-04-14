"use strict";

const currentYear = new Date().getFullYear(); // записываем все переменные с указанием типа
let yearOfBirth = 0;
let age = 0;

yearOfBirth = Number(prompt("Какой у вас год рождения?")); // просим пользователя написать его год рождения

if (yearOfBirth === null || Number.isNaN(yearOfBirth)) { // проверяем коректность ввода, если вод не коректен выдаем ошибку
    alert("Ошибка: Некоректный ввод.");
    console.warn("Пожалуйста, введите корректный год рождения (число).");
} else {
    age = currentYear - yearOfBirth; // вычислили примерный возраст
    console.log(`Вам примерно ${age} лет.`); // выводим результат
    alert(`Вам примерно ${age} лет.`);
}
