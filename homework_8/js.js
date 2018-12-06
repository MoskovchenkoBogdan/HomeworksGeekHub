let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, '', 15];
let gameList = document.getElementById('box');
let list = gameList.querySelectorAll('li');

function test(arr) {
    let arrTrue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, ''];
    let count = 0;
    for (let i = 0; i < arrTrue.length; i++) {
        if (arr[i] == arrTrue[i]) {
            count++;
        }
    }
    if (count === 16) {
        alert('Поздравляем вы справились');
    }
}

function createList(list, arr) {

    for (let i = 0; i < arr.length; i++) {
        let span = document.createElement('span');
        span.innerText = arr[i];
        list[i].appendChild(span);
    }
}

createList(list, arr);

function remove(list) {
    for (let i = 0; i < list.length; i++) {
        list[i].textContent = '';
    }
};

function findEmpty(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '') {
            return i
        }
    }
}

// Игра стрелочками
window.addEventListener('keydown', (event) => {
    if (event.keyCode === 38) {
        let key = findEmpty(arr);
        if ((key + 4) < 16) {
            let swap = arr[key + 4];
            arr[key + 4] = '';
            arr[key] = swap;
            remove(list);
            createList(list, arr);
            test(arr);
            loadContent(list, arr);
        }
    }
    if (event.keyCode === 37) {
        let key = findEmpty(arr);
        if (key !== 3 && key !== 7 && key !== 11 && key !== 15) {
            let swap = arr[key + 1];
            arr[key + 1] = '';
            arr[key] = swap;
            remove(list);
            createList(list, arr);
            test(arr);
            loadContent(list, arr);
        }
    }
    if (event.keyCode === 39) {
        let key = findEmpty(arr);
        if (key !== 0 && key !== 4 && key !== 8 && key !== 12) {
            let swap = arr[key - 1];
            arr[key - 1] = '';
            arr[key] = swap;
            remove(list);
            createList(list, arr);
            test(arr);
            loadContent(list, arr);
        }
    }
    if (event.keyCode === 40) {
        let key = findEmpty(arr);
        if ((key - 4) >= 0) {
            let swap = arr[key - 4];
            arr[key - 4] = '';
            arr[key] = swap;
            remove(list);
            createList(list, arr);
            test(arr);
            loadContent(list, arr);
        }
    }
});

// Игра кликом мышки
function findIndex(item, arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == item) {
            return i
        }
    }
};

window.addEventListener('click', (event) => {
    let key = findEmpty(arr);
    let prop = event.target.textContent;
    let index = findIndex(prop, arr);

    if ((index - key) === 4) {
        let swap = arr[index];
        arr[index] = '';
        arr[key] = swap;
        remove(list);
        createList(list, arr);
        test(arr);
        loadContent(list, arr);
    }

    if ((index - key) === -4) {
        let swap = arr[index];
        arr[index] = '';
        arr[key] = swap;
        remove(list);
        createList(list, arr);
        test(arr);
        loadContent(list, arr);
    }

    if ((index - key) === 1 && key !== 3 && key !== 7 && key !== 11 && key !== 15) {
        let swap = arr[index];
        arr[index] = '';
        arr[key] = swap;
        remove(list);
        createList(list, arr);
        test(arr);
        loadContent(list, arr);
    }
    if ((index - key) === -1 && key !== 0 && key !== 4 && key !== 8 && key !== 12) {
        let swap = arr[key - 1];
        arr[key - 1] = '';
        arr[key] = swap;
        remove(list);
        createList(list, arr);
        test(arr);
        loadContent(list, arr);
    }

});
// Drag & drop //показывает ошибку в консоли что не может правильно прочитать addEventListener dragstart так
// как item undefined но работает ... иногда подглючивая /// где-то ошибка но никак не могу найти
loadContent(list, arr);

function loadContent(list, arr) {

    for (let i = 0; i < list.length; i++) {
        list[i].setAttribute('draggable', false);
    }

    let buttonEmptyIndex = findEmpty(arr);

    list[buttonEmptyIndex].setAttribute('data-index', list[buttonEmptyIndex].innerHTML);
    list[buttonEmptyIndex].setAttribute('draggable', true);

    if (list[buttonEmptyIndex + 1] && buttonEmptyIndex !== 3 && buttonEmptyIndex !== 7 && buttonEmptyIndex !== 11 &&
        buttonEmptyIndex !== 15) {
        list[buttonEmptyIndex + 1].setAttribute('data-index', list[buttonEmptyIndex + 1].innerHTML);
        list[buttonEmptyIndex + 1].setAttribute('draggable', true);
    }
    if (list[buttonEmptyIndex - 1] && buttonEmptyIndex !== 0 && buttonEmptyIndex !== 4 && buttonEmptyIndex !== 8 &&
        buttonEmptyIndex !== 12) {
        list[buttonEmptyIndex - 1].setAttribute('data-index', list[buttonEmptyIndex - 1].innerHTML);
        list[buttonEmptyIndex - 1].setAttribute('draggable', true);
    }
    if (list[buttonEmptyIndex + 4]) {
        list[buttonEmptyIndex + 4].setAttribute('data-index', list[buttonEmptyIndex + 4].innerHTML);
        list[buttonEmptyIndex + 4].setAttribute('draggable', true);
    }
    if (list[buttonEmptyIndex - 4]) {
        list[buttonEmptyIndex - 4].setAttribute('data-index', list[buttonEmptyIndex - 4].innerHTML);
        list[buttonEmptyIndex - 4].setAttribute('draggable', true);
    }

    addDraggableEvents(list[buttonEmptyIndex]);
    addDraggableEvents(list[buttonEmptyIndex - 1]);
    addDraggableEvents(list[buttonEmptyIndex + 1]);
    addDraggableEvents(list[buttonEmptyIndex - 4]);
    addDraggableEvents(list[buttonEmptyIndex + 4]);

    function addDraggableEvents(item) {
        item.addEventListener('dragstart', dragStart);
        item.addEventListener('dragenter', dragEnter);
        item.addEventListener('dragover', dragOver);
        item.addEventListener('dragleave', dragLeave);
        item.addEventListener('dragend', dragEnd);
        item.addEventListener('drop', dragDrop);
    }

    var startElement;

    function dragStart(e) {
        this.classList.add('draggable');
        e.dataTransfer.setData('text/html', this.innerHTML);
        startElement = this;
    }

    function dragEnter() {
        this.classList.add('under-drag');
    }

    function dragOver(e) {
        if (e.preventDefault) {
            e.preventDefault();
        }
        e.dataTransfer.dropEffect = 'move';
    }

    function dragLeave() {
        this.classList.remove('under-drag');
    }

    function dragEnd() {
        this.classList.remove('draggable');
    }

    function dragDrop(e) {
        if (this.innerText === '') {
            this.classList.remove('under-drag');

            if (e.stopPropagation) {
                e.stopPropagation();
            }

            function swapElements(element1, element2) {
                var swapContainer = element2.innerHTML;
                element2.innerHTML = element1.innerHTML;
                element1.innerHTML = swapContainer;
            }

            swapElements(this, startElement);
            for (let i = 0; i < list.length; i++) {
                arr[i] = list[i].innerText;
            }
            remove(list);
            createList(list, arr);
            test(arr);
            loadContent(list, arr);
        }
    }
}
