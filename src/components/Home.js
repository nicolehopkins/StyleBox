import React, { Component } from 'react';
import './Home.css';
import Background from './HomeBackground';


class Home extends Component {
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


export default Home;