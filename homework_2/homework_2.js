// объявляем массив - ну пусть будут числа Фиббоначи
var newArray = {
    '0': 1,
    '1': 1,
    '2': 2,
    '3': 3,
    '4': 5,
    '5': 8,
    '6': 13,
    '7': 21,

};
console.log('Наш "массив" - числа Фиббоначи ',newArray);

// метод pop удаляет последний элемент массива и возвращает его;

Object.defineProperty(newArray, 'arrPop', {
    enumerable: false,
    get: function (){
        let lengthNewArray = 0;
        function someFn() {
            for (var key in newArray){
                lengthNewArray++;
            }
            return lengthNewArray;
        }

        someFn();
        return delete newArray[lengthNewArray-1];
    }
})
newArray.arrPop;

console.log('Методом pop удаляем последний элемент "массива"', newArray);

// метод push добавляет элемент в конец массива;


Object.defineProperty(newArray, 'arrPush', {
    enumerable: false,
    get: function () {
            var lengthNewArray = 0;
            for (var key in newArray) {
                lengthNewArray++;
            }
            newArray[lengthNewArray] = newArray[lengthNewArray-1] + newArray[lengthNewArray-2];
            return newArray;
    }

})

newArray.arrPush;

console.log('Методом push добавляем последний элемент "массива"',newArray);

// метод join создает из массива строку;

Object.defineProperty(newArray, 'join',{
    enumerable: false,
    get: function () {
        var sum = '';
        for (var prop in newArray) {
            sum = sum + newArray[prop] + ' '
        }
        sum = sum.trim();
        return sum
    }
})

console.log('Методом join создаем из "массива" строку', newArray.join);

// метод filter используется для фильтрации массива через функцию;

Object.defineProperty(newArray, 'filter',{
    enumerable: false,
    get: function () {
        var filter = {};
        var i = 0;
        for (key in newArray) {
            if (newArray[key] > 5) {
                filter[i] = newArray[key];
                i++
            }
        }
        return filter
    }
})


console.log('Методом filter создаем "массив" из старого все элементы которого больше 5 ', newArray.filter);

// метод find возвращает первое значение массива удовлетворяющего условие или undefined если его не находит;

Object.defineProperty(newArray, 'find', {
    enumerable: false,
    get: function () {
        var find1;
        function calc() {
            for (key in newArray) {
            if (newArray[key] > 3) {
                return find1 = newArray[key]
            };
            }
        }
        calc();
        return find1;
    }
})
console.log('Методом find находим элемент "массива" который больше 3 ', newArray.find);

// метод map создает новый массив в результате трансформацыи старого по заданным условиям;
//создадим объект значения свойств которого будут значения объекта а / 5;

Object.defineProperty(newArray, 'map', {
    enumerable: false,
    get: function () {
        var newCurrentArray = {};
        for (var key in newArray) {
            newCurrentArray[key] = newArray[key] / 5
        }
        return newCurrentArray;
    }
})
console.log('Методом map создаем "массив" все элементы которого получены из старого / 5', newArray.map);

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

Object.defineProperty(array, 'sort', {
    enumerable: false,
    get: function () {
        var lengthArray = 0;
        function f() {
            for (key in newArray) {
                lengthArray++;
            }
            return lengthArray
        }
        f();
        function sortArray(array) {
            for (i = 0; i < lengthArray; i++) {
                for (var j = 0; j < lengthArray - i - 1; j++) {
                    if (array[j] < array[j + 1]) {
                        var x = array[j];
                        array[j] = array[j + 1];
                        array[j + 1] = x;
                    }
                }
            }
            return array;
        };
        return sortArray(array);
    }
})
console.log("Отсортируем 'массив' в порядке уменьшения", array.sort);

//Метод toString() для массивов выведет строку каждый элемент которого будет разделятся - ,
Object.defineProperty(newArray, 'toString', {
    enumerable: false,
    get: function () {
        sum = '';
        for (var prop in newArray) {
            sum = sum + newArray[prop] + ',';
        }
        return sum.slice(0, -1)
    }
})
console.log('Метод toString() создает из "массива" строку, каждый элемент которого будет разделятся -,', newArray.toString);

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


