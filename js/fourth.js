"use strict"

let year = +prompt("Введите год");
while (year > 0) {
    if (year % 4 === 0 && year % 100 !== 0) {
        alert("Год является высокосным");
    } else {
        alert("Год не высокосный");
    }
    break;
}

