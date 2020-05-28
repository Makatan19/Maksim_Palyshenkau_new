'use strict';
alert('omomomom');

let name = prompt('Как тебя зовут?', ['Имя']);
if (name==null){
    alert('Вы забыли ввести имя');
    }
else{
    alert(`Привет ${name}`);
    }

let result = confirm('Давай сыграем в Игру?');
alert (result);

let age = prompt('Сколько тебе лет?', 18);
let message =   (age < 3) ? 'Привет, малыш!' :
                (age <18) ? 'А ты не такой маленький' :
                (age <100) ? 'Добрый вечер' : 'Не обманывай';
alert(message);

let i =0;
while (i<3){
    alert (i);
    i++
}