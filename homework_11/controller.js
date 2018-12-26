var Controller = {
    create() {
        return View.createItem(Model.add(), Model.draggable()), Controller.dragDrop();

    },

    reverse() {
        return View.reverseList(Model.reverse(), Model.draggable()), Controller.dragDrop();
    },

    test() {
        return View.reverseList(Model.testLocalStorage(), Model.draggable()), Controller.dragDrop();
    },

    remove() {
        return View.removeAll(Model.clearLocalStorage());
    },

    dragDrop() {
        let workList = document.getElementById('workList');
        let list = workList.querySelectorAll('li');
        for (let i = 0; i < list.length; i++) {
            list[i].setAttribute('data-index', list[i].innerHTML);
            addDraggableEvents(list[i]);
        }

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
            let that = this;
            View.dragStart(that);
            e.dataTransfer.setData('text/html', this.innerHTML);
            startElement = this;
        }

        function dragEnter() {
            let that = this;
            View.dragEnter(that);
        }

        function dragOver(e) {
            if (e.preventDefault) {
                e.preventDefault();
            }
            e.dataTransfer.dropEffect = 'move';
        }

        function dragLeave() {
            let that = this;
            View.dragLeave(that);
        }

        function dragEnd() {
            let that = this;
            View.dragEnd(that);
        }

        function dragDrop(e) {
            let that = this;
           View.dragDrop(that);

            if (e.stopPropagation) {
                e.stopPropagation();
            }
            Model.swapElements(this, startElement);
            Model.saveLocalStorage();
        }
    }
};
