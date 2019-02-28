import React, {Component} from 'react';
import './Skills.css'


export default class Resume extends Component {
    render() {
        return(
            <div>
               <h1>Skills</h1>
                <h2>Programming Skills:</h2>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                </ul>
                <h2>Other skills:</h2>
                <ul>
                    <li>Possess a broad range of technical, personal effectiveness and leadership skills </li>
                    <li>Use rigorous logic and methods to come up with effective solutions to difficult problems</li>
                    <li>Positive, open to new ideas, self-motivated, disciplined</li>
                </ul>
                <h2>My profile on GitHub </h2>
                <ul>
                    <a href="https://github.com/MoskovchenkoBogdan"><li>https://github.com/MoskovchenkoBogdan</li></a>
                </ul>
            </div>
        )
    }
}