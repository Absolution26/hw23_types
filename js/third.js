'use strict'

let num = prompt('Введите трёхзначное число');
let num1 = parseInt(num / 100);
let num2 = parseInt((num / 10) % 10);
let num3 = parseInt(num % 10);

if (num1 === num2 || num1 === num3 || num2 === num3) {
    alert("В числе есть одинаковые цифры");
} else {
    alert("одинаковые цифры отсутствуют");
}

