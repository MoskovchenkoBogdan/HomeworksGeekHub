import React, {Component} from 'react';
import './Resume.css'


export default class Resume extends Component {

    render() {
        return (
            <div>
                <h1>Resume</h1>
                <h2>Bogdan</h2>
                <hr/>
                <table>
                    <tbody>
                    <tr>
                        <td>First&Last name</td>
                        <td>Bogdan Moskovchenko</td>
                    </tr>
                    <tr>
                        <td>Nationality</td>
                        <td>Ukrainian</td>
                    </tr>
                    <tr>
                        <td>Country</td>
                        <td>Ukraine</td>
                    </tr>
                    <tr>
                        <td>City of residence</td>
                        <td>Cherkasy</td>
                    </tr>
                    <tr>
                        <td>Date of birth</td>
                        <td>11.12.1988</td>
                    </tr>
                    <tr>
                        <td>Age/Height/Weight</td>
                        <td>30-189-65</td>
                    </tr>
                    <tr>
                        <td>Phone</td>
                        <td>0638773325</td>
                    </tr>
                    <tr>
                        <td>E-mail</td>
                        <td>zhoufattyweiqing@gmail.com</td>
                    </tr>
                    </tbody>
                </table>

                <h4 >Education </h4>
                <ul>
                    <li>Cherkasy state technological university</li>
                    <li>GeekHub</li>
                </ul>

                <h4>Experience </h4>
                <ul>
                    <li>Civil Engineer in 'An association “Group of companies “Dobrobud””'</li>
                    <li>Civil Engineer in 'Construction Company “BMU-27”'</li>
                </ul>

                <h4> Interests </h4>
                <ul>
                    <li>Programming</li>
                    <li>Computer Science</li>
                </ul>
            </div>
        )
    }
}