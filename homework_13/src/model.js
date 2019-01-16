var Model = {

    add() {
        let workList = document.getElementById('workList');
        let inputTask = workList.querySelector('input[type=text]');
        let task = inputTask.value;

        function setDate() {
            let date = new Date();
            return ' enlisting time: ' + date.getHours() + ':' + date.getMinutes() + ' ' + date.getDay() + '.'
                + date.getMonth() + '.' + date.getFullYear();
        }

        if (task !== '') {
            inputTask.value = '';
            task = task + setDate();
            return task;
        }
    },

    reverse() {
        let arr = [];
        let workList = document.getElementById('workList');
        let list = workList.querySelector('ul');
        for (let i = 0; i < list.children.length; i++) {
            let span = list.children[i].querySelector('span');
            arr[i] = span.innerText;
        }
        return arr.reverse();
    },

    testLocalStorage() {
        let getLocalStorage = localStorage.getItem('WorkList');
        return getLocalStorage = JSON.parse(getLocalStorage);

    },

    saveLocalStorage() {
        let workList = document.getElementById('workList');
        let list = workList.querySelector('ul');
        let arrLocalStorage = [];
        for (let i = 0; i < list.children.length; i++) {
            let span = list.children[i].querySelector('span');
            arrLocalStorage[i] = span.innerText;
        }
        localStorage.setItem('WorkList', JSON.stringify(arrLocalStorage));
    },

    clearLocalStorage() {
        localStorage.clear();
    },

    draggable() {
        return true;
    },
    swapElements(element1, element2) {
        var swapContainer = element2.innerHTML;
        element2.innerHTML = element1.innerHTML;
        element1.innerHTML = swapContainer;
    }

};

export default Model;