// 1я задача а) вариант1
let range = {
    from: 1,
    to: 100,

    [Symbol.iterator]() {
        return this;
    },

    next() {
        if (this.current === undefined) {
            // инициализация состояния итерации
            this.current = this.from;
        }

        if (this.current < this.to) {
            this.current++;
            return {
                done: false,
                value: Math.floor(Math.random()*9999999)
            };
        } else {
            // очистка текущей итерации
            delete this.current;
            return {
                done: true
            };
        }
    }

};

for (let num of range){
    console.log(num);
}

// 1я задача а) вариант2
let numberArray = [];
function* generateSequence() {
    for(let i=0; i< 1000; i++)
    yield numberArray.push(Math.floor(Math.random()*99999999));
}

let generator = generateSequence();

let timerId = setInterval(function () {generator.next();
console.log(numberArray)}, 1000);


// 2я задача
function perform() {
    let n = arguments;
    return new Promise(function(resolve, reject){
        resolve(n[0]);
    })
}

perform(null, function (value) { // value === null
    var param = 1;
    console.log(param); // 1
    return param;
})
    .then(function (param) { // param === 1
        console.log(++param); // 2
        return param;
    })
    .then(function (param) { // param === 2
        console.log(++param); // 3
        return param;
    });

// 1я задача б)

let obj = {
    prop1: 'someValue',
    prop2: 'anotherValue',
    prop3: {
        innerProp: 'firstValue',
        innerprop2: 'secondValue',
        prop4: {
            newProp: 'newValue'
        }
    },
    prop4: [2, 4, 76, 83],

};

function* generateObj(obj) {
    for (let key in obj)
        if (typeof  obj[key] === "object") {
                yield* generateObj(obj[key])
        } else {
            yield console.log(obj[key]);
        }
}

let generator = generateObj(obj);

for (let value of generator) {
    console.log(value)
}

