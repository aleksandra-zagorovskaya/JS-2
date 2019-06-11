//задача 1
var num = 1;
num += 12;
num -= 14;
num *= 5;
num /= 10;
num ++;
num --;
num += 7;
num -= 18;
num *= 10;
num /= 5;
console.log(num);

//задача 2
var hour = 10;
var minute = 15;
var second = 20;
console.log(hour +  ":" + minute  + ":" + second);

//задача 3
var str = "abcde";
if (str[0]== 'a') {
    alert('Да');
} else {
    alert('Нет')
}

//задача4
var str = '257';
var sum = str[0]+str[1]+str[2];
alert(sum); //не работает

//задача 5
var a = 10;
if (a == 10){
    alert('Верно');
} else {
    alert('Неверно')
}

//задача 6
var a ='test';
if (a == 'test4'){
    alert('Верно');
} else if (a =='тест') {
    alert('Неверно')
} else if (a ==3) {
    alert('Неверно')
} else {
    alert ('Неверно')
}


 //задача 7
var a = 1;
var b = 3;
if (a <= 1 && b >=3){
    console.log(a+b);
} else {
    console.log(a-b);
}
var a = 0;
var b = 6;
if (a <= 1 && b >=3){
    console.log(a+b);
} else {
    console.log(a-b);
}
var a = 3;
var b = 5;
if (a <= 1 && b >=3){
    console.log(a+b);
} else {
    console.log(a-b);
}

//задача 8
var name = prompt('Ваше имя');
var login = prompt('Введите логин');
var pass = prompt('Ваш пароль');
if (login =='admin'&& pass=='nimda'){
    alert('Добро пожаловать, %Имя%! Вы успешно вошли на сайт.')
}else {
    alert('«%Имя%, вы неверно ввели логин или пароль!')
}

