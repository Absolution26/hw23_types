"use strict"

let number = prompt("Введите пятизначное число");
let palindrome = number.split("").reverse("").join("");

if (number == palindrome) {
    alert("Палиндром");
} else {
    alert("Не палиндром")
}

