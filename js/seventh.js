"use strict"
// Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой: 
// от 200 до 300 – скидка будет 3 %, от 300 до 500 – 5 %, от 500 и выше – 7 %.
let sum = +prompt("Введите сумму покупки");

if (sum < 200) {
    alert("Сумма покупки составляет " + sum);
} else if (sum < 300) {
    alert("Сумма покупки составляет " + sum * 0.97);
} else if (sum < 500) {
    alert("Сумма покупки составляет " + sum * 0.95);
} else if (sum < Infinity) {
    alert("Сумма покупки составляет " + sum * 0.93);
}
