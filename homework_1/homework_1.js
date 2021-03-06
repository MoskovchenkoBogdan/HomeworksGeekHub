// объявляем массив -  будут числа Фиббоначи;
var array = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];
console.log('Наш массив =', array);

// метод pop удаляет последний элемент массива и возвращает его;

console.log('Удаляемый аргумент с помощью метода pop =',array.pop());
console.log('Измененный массив =', array);

// метод push добавляет элемент в конец массива;

console.log('Добавляем элемент методом push с индексом нумерации =', array.push(144));
console.log('Измененный массив =', array);

// метод concat создаст массив из существуещего + добавит элементы которые мы пропишем в конец массива;

var newArray = array.concat([233, 377], 610);
console.log('Новый массив полученный с помощью метода concat с добавлением новых элементов',newArray);
console.log('В дальнейшем будем использовать его для последующих преобразований');

// метод indexOf возвращает номер элемента, который мы ищем, или -1;

console.log('Найдем индексацию элемента нового массива со значением 34 =', newArray.indexOf(34));

// метод join создает из массива строку;

var str = newArray.join(' ');
console.log('Создадим строку из элементов массива с помощью join =', str);

// метод forEach служит для более элегантного перебора массива чем цикл for;

console.log('Произведем перебор массива с помощью метода forEach =');
newArray.forEach(function(number, i, newArray) {
    console.log( i + ": " + number + " (массив:" + str + ")" );
});

// метод filter используется для фильтрации массива через функцию;

var filterArr = newArray.filter(function (number) {
    return number > 20;
});
console.log('Создадим новый массив из старого, где все элементы будут больше 20 =', filterArr);

// метод find возвращает первое значение массива удовлетворяющего условие или undefined если его не находит;
// массив при этом не изменяется;

var findValue = newArray.find(function checkValue(currentValue) {
    return currentValue > 100;
});
console.log('Найдем первое значение массива больше 100 с помощью метода find =', findValue);

// метод map создает новый массив в результате трансформацыи старого по заданным условиям;

var newCurrentArray = newArray.map(function (value) {
    return value/5;
});
console.log('Создадим новый массив с помощью map каждое значение которого будет поделено на 5 =',newCurrentArray);

// метод slice создает новый массив копируя значения из старого не изменяя его;

var sliceArray = newArray.slice(2, 10);
console.log('Массив полученный с помощью метода slice',sliceArray);

// метод splice универсален - позаоляет удалять, вставлять или заменять элементы;

console.log(newArray);
newArray.splice(5, 3, 'все', 'просто');
console.log('С помощью splice удалим 3 элемента начиная с 5 и добавим пару строк', newArray);

// метод shift удаляет из массива первый элемент и возвращает его;

newArray.shift();
console.log('Удалим первый элемент массива с помощью shift', newArray);

// метод unshift добавляет элемент в начало массива;

newArray.unshift(1);
console.log('Вернем первый элемент со значением 1 с помощью unshift',newArray);

/////////////////////////////////////////////////////////////////////////