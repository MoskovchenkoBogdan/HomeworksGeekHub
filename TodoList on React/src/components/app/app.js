import React, {Component} from 'react'
import './app.css'

import AppHeader from '../app-header';
import TodoList from '../todo-list';
import AddPanel from '../app-panel';


export default class App extends Component {

    state = {
        todoData: [
        ]
    };

    deleteItem = (id) => {
        this.setState(({todoData}) => {
            const idx = todoData.findIndex((el) => el.id === id);
            const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];

            return {
                todoData: newArray
            }
        })
    };

    reverseItems = () => {

        this.setState(({todoData}) => {
            let arr = [];

            todoData.forEach((item, i) => {
                 arr[i] = todoData[i]
            });

            arr.reverse();

            return {
                todoData: arr
            }

        })
    };

    addItem = (text) => {

        let maxId = Math.round(Math.random() * 10000);

        const newItem = {
            label: text,
            important: false,
            done: false,
            id: maxId
        };

        this.setState(({todoData}) => {
            const newArr = [...todoData, newItem];

            return {
                todoData: newArr
            }
        });
    };

    toggle(arr, id, propName){

        const idx = arr.findIndex((el) => el.id === id);
        const oldItem = arr[idx];
        const newItem = {...oldItem, [propName]: !oldItem[propName]};

        const newArray = [...arr.slice(0, idx), newItem,
            ...arr.slice(idx + 1)];

        return newArray;
    }

    onToggleDone = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggle(todoData, id, 'done')
            }

        });
    };

    onToggleImportant = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggle(todoData, id, 'important')
            }

        });
    };

    render() {
        return (
            <div className="app-div">
                <AppHeader/>
                <AddPanel onReverse={this.reverseItems} onAddTask={this.addItem}/>
                <TodoList todos={this.state.todoData}
                          onDeleted={this.deleteItem}
                          onToggleImportant={this.onToggleImportant}
                          onToggleDone={this.onToggleDone}
                />
            </div>
        )
    }

};

