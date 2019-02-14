import React, {Component} from 'react';
import './todo-list-item.css';

export default class TodoListItem extends Component {

    render() {
        const { label,
            onDeleted,
            onToggleDone,
            onToggleImportant,
            important,
            done} = this.props;


        let classNames = 'todo-list-item';

        if (done) {
            classNames += ' done';
        }

        if (important) {
            classNames += ' important'
        }

        return (
            <span className={classNames}>
                <span
                    onClick={onToggleDone}>
                    {label}
                    </span>
                <button type='button' className="todo-list-item-button"
                        onClick={onDeleted}>Delete task!!
                </button>
                <button type='button' className="todo-list-item-button"
                        onClick={onToggleImportant}>Important!!
                </button>
            </span>

        )
    }
}
