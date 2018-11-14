let workList = document.getElementById('workList');
let list = workList.querySelector('ul');
let addButton = document.getElementById('add');
let removeButton = document.getElementById('remove');
let inputTask = workList.querySelector('input[type=text]');
let reverseButton = document.getElementById('reverse');

addButton.addEventListener('click', () => {
    let task = inputTask.value;
    if (task !== '') {
        createItem(list, task);
        inputTask.value = '';
    }
});

removeButton.addEventListener('click', () => {
    let task = inputTask.value + setDate();
    for (let i = 0; i < list.children.length; i++) {
        if (list.children[i].textContent === task) {
            list.removeChild(list.children[i]);
            inputTask.value = '';
            break;
        }
        inputTask.value = '';
    }
});

reverseButton.addEventListener('click', () => {
    let arr=[];

    for (let i=0; i<list.children.length ;i++){
        arr[i] = list.children[i].textContent;
    }
    arr.reverse();

    while(list.firstChild){
        list.removeChild(list.firstChild);
    }

    for (let i=0;i<arr.length;i++){
        let item = document.createElement('li');
        item.textContent = arr[i];
        list.appendChild(item);
    }
});

function createItem(list, text) {
    let item = document.createElement('li');

    let span = document.createElement('span');
    span.innerText = text + setDate();
    item.appendChild(span);

    list.appendChild(item);
}

function setDate() {
    let date = new Date();
    return ' enlisting time: '+date.getHours() +':'+date.getMinutes() +' '+date.getDay()+'.'+date.getMonth()+'.'+date.getFullYear();
}
