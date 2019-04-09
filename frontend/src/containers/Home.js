import React from 'react';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../styling/Home.css';


const Home = () => {

        return (
            <div className='container'>
                <Button className='get-started-button' href='http://localhost:3000/#/signup' >Get Started</Button>
                <div className="images">
                    <img alt='style1' src='https://images.unsplash.com/photo-1528991435120-e73e05a58897?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=clamp&w=600&q=60' />
                    <img alt='style2' src='https://images.unsplash.com/photo-1542776575-f1623249ce85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=clamp&w=600&q=60' />
                    <img alt='style3' src='https://images.unsplash.com/photo-1500336624523-d727130c3328?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=clamp&w=600&q=60' />
                </div>
            </div> 
        )
}

export default Home;