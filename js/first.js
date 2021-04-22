"use strict"

let age = +prompt("Пожалуйста, введите ваш возраст");

//while (typeof age === "Number") {
if (age < 0) {
    alert("Вы еще не родились? ^_^");
} else if (age <= 12) {
    alert("Вы ребенок ^_^");
} else if (age <= 18) {
    alert("Вы подросток -_-");
} else if (age <= 60) {
    alert("Вы взрослый 0_0");
} else if (age <= 120) {
    alert("Вы пенсионер =_=");
} else if (age <= Infinity) {
    alert("Вы граф дракула?! +_+");
}
//}  else if (typeof age != "Number") {
//     alert("Пожалуйста, введите ваш возраст корректно");
// }



