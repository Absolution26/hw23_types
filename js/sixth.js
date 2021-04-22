"use strict"

let sum = prompt("Введите сумму, которую хотите конвертировать(USD)");
let currency = prompt("В какую валюту хотите конвертировать(EUR, UAN или AZN)");
let cash = 0;

if (currency == 'EUR') {
    cash = sum * 0.83;
    alert("Полученная сумма составит " + cash.toFixed(2) + " EUR");
} else if (currency == 'UAN') {
    cash = sum * 27.99;
    alert("Полученная сумма составит " + cash.toFixed(2) + " UAN");
} else if (currency == 'AZN') {
    cash = sum * 0.59;
    alert("Полученная сумма составит " + cash.toFixed(2) + " AZN");
}