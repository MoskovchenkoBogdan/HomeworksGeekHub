import React, {Component} from "react";
import './add-panel.css';

export default class AddPanel extends Component {

    state = {
        label: ''
    };


    onAddNewTask = () => {
        if (this.state.label) {
            this.props.onAddTask(this.state.label);
            this.setState({
                label: ''
            })
        }
    }


    onTextChange = (e) => {
        this.setState({
            label: e.target.value
        })

    }


    render() {


        return (
            <div>
                <input className='add-input'
                       placeholder='Add new task'
                       onChange={this.onTextChange}
                       value={this.state.label}
                />
                <button type="button" onClick={this.onAddNewTask}>Add new task</button>
                <button type="button" onClick={this.props.onReverse}>Reverse!!!</button>
            </div>
        )
    }

}

