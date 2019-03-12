import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './Nav.css';


const Nav = () => {

    return (
        <div className='header'>
            <div className='logo'>
                <a href='/'><img src='https://tbncdn.freelogodesign.org/985834d1-1891-43a0-ba41-76dcc9cea295.png?1552172962507' alt='logo'/></a>
            </div>
                <Router>
                    <div>
                        <div className='nav-tags links'>
                            <Link to='/howitworks'>How It Works</Link>
                            <Link to='/ourmission'>Home</Link>
                        </div>
                        <div className='account-tags links'>
                            <Link to='/login'>Log In</Link>
                            <Link to='/cart'>Cart</Link>
                        </div>
                    </div>
                </Router>
            </div>
    )
}

export default Nav;