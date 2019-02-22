import React, {Component} from 'react';
import SliderItem from './SliderItem'
import GetUsers from './FindRandomUser'
import './Slider.css'


export default class Slider extends Component {

    getUsers = new GetUsers();

    state = {
        arr1: [{
            name: null,
            location: null,
            email: null,
            phone: null,
            image: null
        }],
        arr2: [{
            name: null,
            location: null,
            email: null,
            phone: null,
            image: null
        }],
        sliderSpeed1: '',
        sliderSpeed2: '',
        important1: '',
        important2: ''
    };


    componentDidMount() {
        this.getData();
        this.getData();
    }

    getData() {
        this.getUsers.getHumansInfo()
            .then((users) => {
                let arr = [];

                for (let i = 0; i < users.length; i++) {
                    arr[i] = {
                        name: ' ' + users[i].name.last + ' ' + users[i].name.first,
                        location: ' ' + users[i].location.city + ' ' + users[i].location.street,
                        email: ' ' + users[i].email,
                        phone: ' ' + users[i].phone,
                        image:  users[i].picture.large
                    }
                }
                if (this.state.arr1[1]) {
                    this.setState({
                        arr2: arr,
                    })
                } else {
                    this.setState({
                        arr1: arr,
                    })
                }

            })
    }

    onSubmit1 = (e) => {
        e.preventDefault();
        this.setState({
            important1: this.state.sliderSpeed1,
            sliderSpeed1: ''
        });
        console.log(this.state.important1)
    };

    onSubmit2 = (e) => {
        e.preventDefault();
        this.setState({
            important2: this.state.sliderSpeed2,
            sliderSpeed2: ''
        });

    };

    onTextChange1 = (e) => {
        this.setState({
            sliderSpeed1: e.target.value
        })

    };

    onTextChange2 = (e) => {
        this.setState({
            sliderSpeed2: e.target.value
        })

    };

    render() {


        return (
            <div className="Slider">
                <h1>Slider is here</h1>
                <form onSubmit={this.onSubmit1}>
                    <input type='number' placeholder="Скорость смены слайдера №1"
                           onChange={this.onTextChange1}
                           value={this.state.sliderSpeed1}/>
                    <button>Submit</button>
                </form>
                <SliderItem data={this.state.arr1} slide={this.state.important1}/>
                <form onSubmit={this.onSubmit2}>
                    <input type='number' placeholder="Скорость смены слайдера №2"
                           onChange={this.onTextChange2}
                           value={this.state.sliderSpeed2}/>
                    <button>Submit</button>
                </form>
                <SliderItem data={this.state.arr2} slide={this.state.important2}/>
            </div>
        )

    }
}