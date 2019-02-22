import React, {Component} from 'react';
import "./SliderItem.css"


export default class SliderItem extends Component {
    state = {
        arr: [{
            image: '',
            name: "",
            location: '',
            email: '',
            phone: ''
        }],
        randomNumber: 0,
        intervalState: 2000

    }

    componentDidMount() {
        this.setState({
            arr: this.props.data
        });




    }

    componentDidUpdate(prevProps) {
        if (this.props.slide !== prevProps.slide) {
            this.setState({
                intervalState: this.props.slide
            });
            console.log('intervalState', this.state.intervalState);
            
            this.interval = setInterval(() => {
                this.setState({
                    randomNumber: Math.floor(Math.random() * 10),
                })
            }, this.state.intervalState)
        }

    }


    render() {

        let {image, name, location, email, phone} = this.props.data[this.state.randomNumber];


        return (

            <div className="SliderItem">
                <img className="Slider-image" src={image} alt='image here'/>
                <div className="Slider-details">
                    <ul>
                        <li>
                            <span>name: </span>
                            <span>{name}</span>
                        </li>
                        <li>
                            <span>location: </span>
                            <span>{location}</span>
                        </li>
                        <li>
                            <span>email: </span>
                            <span>{email}</span>
                        </li>
                        <li>
                            <span>phone: </span>
                            <span>{phone}</span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}