import Controller from './controller.js';

let getLocalStorage = localStorage.getItem('WorkList');
if (getLocalStorage !== null) {
    Controller.test();
};
Controller.dragDrop();

let add = document.getElementById('add');
let removeAll = document.getElementById('removeAll');
let reverse = document.getElementById('reverse');

add.addEventListener('click', () => {
    Controller.create()
});

removeAll.addEventListener('click', () => {
    Controller.remove()
});

reverse.addEventListener('click', () => {
    Controller.reverse()
});

import './css/style.css';