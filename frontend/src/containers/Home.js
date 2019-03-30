import React, { Component } from 'react';
import Background from '../components/HomeBackground';
import '../styling/Home.css';
import HomeBackground from '../components/HomeBackground';


export default class Home extends Component {

    render() {
        return (
                <div className='body'>
                    <div >
                        <button className='home-button' >Get Started</button>
                    </div>
                    <div>
                        <img src='https://images.unsplash.com/photo-1528991435120-e73e05a58897?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' />
                        <img src='https://images.unsplash.com/photo-1542776575-f1623249ce85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' />
                        <img src='https://images.unsplash.com/photo-1500336624523-d727130c3328?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' />
                    </div>
                </div>
        )
    }
}