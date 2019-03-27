import React, { Component } from 'react';
import Background from '../components/HomeBackground';
import '../styling/Home.css';


export default class Home extends Component {

    render() {
        return (
                <div className='body'>
                    <div >
                        <button className='home-button' >Get Started</button>
                    </div>
                    <div>
                        <Background />
                    </div>
                </div>
        )
    }
}