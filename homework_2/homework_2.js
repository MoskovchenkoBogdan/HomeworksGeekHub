// объявляем массив - ну пусть будут числа Фиббоначи
var newArray = {
    '0': 1,
    '1': 1,
    '2': 2,
    '3': 3,
    '4': 5,
    '5': 8,
    '6': 13,
    '7': 21
};
console.log('Наш "массив" - числа Фиббоначи ',newArray);

// метод pop удаляет последний элемент массива и возвращает его;

var lengthNewArray = 0;
function someFn() {
    for (key in newArray){
        lengthNewArray++;
    }
    return lengthNewArray;
}

someFn();

delete newArray[lengthNewArray - 1];
console.log('Методом pop удаляем последний элемент "массива"', newArray);

// метод push добавляет элемент в конец массива;

lengthNewArray = 0;
function f1() {
    for (key in newArray){
        lengthNewArray++;
    }
    return lengthNewArray
}
f1();

newArray[lengthNewArray] = 21;

console.log('Методом push добавляем последний элемент "массива"',newArray);

// метод join создает из массива строку;

var sum = '';
for (var prop in newArray){
    sum = sum + newArray[prop]+' '
}
sum = sum.trim();

console.log('Методом join создаем из "массива" строку', sum);

// метод filter используется для фильтрации массива через функцию;

var filter = {};
var i = 0;
for(key in newArray){
    if(newArray[key] > 5){filter[i]= newArray[key]; i++}
}

console.log('Методом filter создаем "массив" из старого все элементы которого больше 5 ', filter);

// метод find возвращает первое значение массива удовлетворяющего условие или undefined если его не находит;

var find;

    function calc(){
        for (key in newArray){
        if (newArray[key] > 3){return find = newArray[key]}
    }
}
    calc();
console.log('Методом find находим элемент "массива" который больше 3 ', find);

// метод map создает новый массив в результате трансформацыи старого по заданным условиям;
//создадим объект значения свойств которого будут значения объекта а / 5;

var newCurrentArray = {};
for (var key in newArray){
    newCurrentArray[key] = newArray[key] / 5
}
console.log('Методом map создаем "массив" все элементы которого получены из старого / 5', newCurrentArray);

// Метод sort - сортирует массив по заданным параметрам или если параметры не заданы то как строки

var array = {
    '0': 3,
    '1': 1,
    '2': 5,
    '3': 21,
    '4': 8,
    '5': 2,
    '6': 13,
    '7': 1
};
var lengthArray = 0;
function f() {
    for (key in newArray){
        lengthArray++;
    }
    return lengthArray
}
f();

function sortArray(array){
    for (i = 0; i< lengthArray; i++){
        for (var j = 0; j < lengthArray-i-1; j++){
            if(array[j] < array[j+1]){
                var x = array[j];
                array[j] = array[j+1];
                array[j+1] = x;
            }
        }
    }
    return array;
};

sortArray(array);

console.log("Отсортируем 'массив' в порядке уменьшения", array);

//Метод toString() для массивов выведет строку каждый элемент которого будет разделятся - ,

sum = '';
for (var prop in newArray){
    sum = sum +newArray[prop]+ ',';
}

console.log('Метод toString() создает из "массива" строку, каждый элемент которого будет разделятся -,', sum.slice(0, -1));

// getter length -- обозначим через Object.defineProperty()

Object.defineProperty(newArray, 'length', {
    get: function () {
        let count = 0;
        for (key in this){
             count++;
        }
    return count
    }
    });

// Задание со звездочкой -- конструктор по типу new Array ()

function AlmostArray (){
    for (i = 0; i < arguments.length; i++){
        this[i] = arguments[i];
    }
}

var arr = new AlmostArray(23, 46, 75, 47, 'просто так');

console.log('Создаем "массив" с помощью конструктора', arr);


