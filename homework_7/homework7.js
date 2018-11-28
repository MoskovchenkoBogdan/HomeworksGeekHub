let workList = document.getElementById('workList');
let list = workList.querySelector('ul');
let addButton = document.getElementById('add');
let removeButton = document.getElementById('removeAll');
let inputTask = workList.querySelector('input[type=text]');
let reverseButton = document.getElementById('reverse');

let getLocalStorage = localStorage.getItem('WorkList');
if (getLocalStorage !== null) {
    getLocalStorage = JSON.parse(getLocalStorage);
    for (let i=0; i<getLocalStorage.length; i++ ){
        createItem(list, getLocalStorage[i][0], getLocalStorage[i][1]);
    }
}

addButton.addEventListener('click', () => {
    let task = inputTask.value;
    if (task !== '') {
        task = task + setDate();
        createItem(list, task);
        inputTask.value = '';
        saveLocalStorage();
    }
});

removeButton.addEventListener('click', () => {
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
    localStorage.clear();
});

reverseButton.addEventListener('click', () => {
    let arr = [];
    let arrCheckBox = [];

    for (let i = 0; i < list.children.length; i++) {
        let span = list.children[i].querySelector('span');
        let checkBox = list.children[i].querySelector('input');
        if (checkBox.checked === true) {
            arrCheckBox[i] = true;
        } else {
            arrCheckBox[i] = false
        }
        arr[i] = span.innerText;
    }
    arr.reverse();
    arrCheckBox.reverse();

    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }

    for (let i = 0; i < arr.length; i++) {
        createItem(list, arr[i] , arrCheckBox[i]);
    }
    saveLocalStorage();
});

function createItem(list, text, checkBoxChecked) {
    let item = document.createElement('li');

    let inputCheckBox = document.createElement('input');
    inputCheckBox.type = 'checkbox';
    if (checkBoxChecked !== undefined) {
        inputCheckBox.checked = checkBoxChecked
    }
    item.appendChild(inputCheckBox);

    let span = document.createElement('span');
    span.innerText = text ;
    item.appendChild(span);

    let removeButton = document.createElement('button');
    removeButton.innerText = 'Remove';
    removeButton.setAttribute('class', 'removeItem');

    let input = document.createElement("input");
    input.setAttribute('class', 'replaceText');

    let replaceButton = document.createElement("button");
    replaceButton.innerText = "Replace";
    replaceButton.setAttribute('class', 'replaceItem');

    list.appendChild(item);
    item.appendChild(removeButton);
    item.appendChild(input);
    item.appendChild(replaceButton);

    inputCheckBox.addEventListener('click', () => {
        saveLocalStorage();
    });

    removeButton.addEventListener('click', () => {
        list.removeChild(item);
        saveLocalStorage();
    });

    replaceButton.addEventListener('click', () => {
        if (input.value !== '') {
            span.innerText = input.value + setDate();
            input.value = '';
            saveLocalStorage();
        }
    })
}

function saveLocalStorage() {
    let workList = document.getElementById('workList');
    let list = workList.querySelector('ul');
    let arrLocalStorage = [];
    let arr = [];
    let arrCheckBox = [];
    for (let i=0; i<list.children.length; i++ ){
        let span = list.children[i].querySelector('span');
        let checkBox = list.children[i].querySelector('input');
        if (checkBox.checked === true) {
            arrCheckBox[i] = true;
        } else {
            arrCheckBox[i] = false
        }
        arr[i] = span.innerText;
        arrLocalStorage[i] = [arr[i], arrCheckBox[i]];
    }
    localStorage.setItem('WorkList', JSON.stringify(arrLocalStorage));
        };

function setDate() {
    let date = new Date();
    return ' enlisting time: ' + date.getHours() + ':' + date.getMinutes() + ' ' + date.getDay() + '.' + date.getMonth() + '.' + date.getFullYear();
}
