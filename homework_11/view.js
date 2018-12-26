var View = {
    createItem(task, draggable) {
        if (task) {
            let workList = document.getElementById('workList');
            let list = workList.querySelector('ul');
            let item = document.createElement('li');
            if (draggable === true) {
                item.setAttribute('draggable', true);
            }


            let span = document.createElement('span');
            span.innerText = task;
            item.appendChild(span);

            // let removeButton = document.createElement('button');
            // removeButton.innerText = 'Remove';
            // removeButton.setAttribute('class', 'removeItem');
            //
            // let input = document.createElement("input");
            // input.setAttribute('class', 'replaceText');
            //
            // let replaceButton = document.createElement("button");
            // replaceButton.innerText = "Replace";
            // replaceButton.setAttribute('class', 'replaceItem');

            list.appendChild(item);
            // item.appendChild(removeButton);
            // item.appendChild(input);
            // item.appendChild(replaceButton);
        }
    },

    reverseList(arr, draggable) {
        let workList = document.getElementById('workList');
        let list = workList.querySelector('ul');
        while (list.firstChild) {
            list.removeChild(list.firstChild);
        }
        for (let i = 0; i < arr.length; i++) {
            View.createItem(arr[i], draggable);
        }

    },

    removeAll() {
        let workList = document.getElementById('workList');
        let list = workList.querySelector('ul');
        while (list.firstChild) {
            list.removeChild(list.firstChild);
        }
    },

    dragStart(e) {
        e.classList.add('draggable');
    },

    dragEnter(e) {
        e.classList.add('under-drag');
    },

    dragLeave(e) {
        e.classList.remove('under-drag');
    },

    dragEnd(e) {
        e.classList.remove('draggable');
    },

    dragDrop(e) {
        e.classList.remove('under-drag');
    }
};