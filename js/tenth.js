"use strict"


let butt = document.getElementById('button')
butt.addEventListener('click', function () {
    let dateControl = document.getElementById("d");//не знаю почему, но не работает через getElementByClassName
    let date = new Date(dateControl.value)
    date.setDate(date.getDate() + 1)
    document.querySelector('input[type="date"]').value = date.toISOString().split('T')[0]
})