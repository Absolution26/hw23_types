"use script"

//Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа.
//За каждый правильный ответ начисляется 2 балла. После вопросов выведите пользователю количество набранных баллов.

let grade = 0;

let question = prompt("2 + 2 = ");
if (question == 4) {
    grade = grade + 2;
} else {
    grade = grade + 0;
}

let question1 = prompt("Can you speak Ukrainian? a)Yes b)No ");
if (question1 == 'Yes' || question1 == 'a' || question1 == 'a)Yes' || question1 == 'A' || question1 == 'yes') {
    grade = grade + 2;
} else {
    grade = grade + 0;
}

let question2 = prompt("Do you like this test? a)Yes b)No ");
if (question2 == 'Yes' || question2 == 'a' || question2 == 'a)Yes' || question2 == 'A' || question2 == 'yes') {
    grade = grade + 2;
} else {
    grade = grade + 0;
}

alert("Вы набрали " + grade + " баллов");