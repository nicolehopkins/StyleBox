import React, { Component } from 'react';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../styling/Home.css';
import Signup from '../components/Signup';
// import { SocialIcon } from 'react-social-icons'; --> if using social media


export default class Home extends Component {

    render() {
        return (
            <div className='container'>
   
                <Button className='get-started-button' href='/signup' exact component={Signup} >Get Started</Button>

                <div className="images">
                    <img alt='style1' src='https://images.unsplash.com/photo-1528991435120-e73e05a58897?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=clamp&w=600&q=60' />
                    <img alt='style2' src='https://images.unsplash.com/photo-1542776575-f1623249ce85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=clamp&w=600&q=60' />
                    <img alt='style3' src='https://images.unsplash.com/photo-1500336624523-d727130c3328?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=clamp&w=600&q=60' />
                </div>
            </div>
        )
    }
}