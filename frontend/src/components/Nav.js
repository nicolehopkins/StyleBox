import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { FaRegThumbsUp, FaSearch } from 'react-icons/fa';
import { FiShoppingCart, FiThumbsUp, FiUserCheck, FiUser } from 'react-icons/fi';
import './Nav.css';
import Home from './Home';
import Products from './Products';
import Login from './Login';
import Cart from './Cart';


const Nav = () => {

    return (
        <div className='nav-bar'>
            <div className='logo'>
                <a href='/'><img src='https://tbncdn.freelogodesign.org/985834d1-1891-43a0-ba41-76dcc9cea295.png?1552172962507' alt='logo'/></a>
            </div>
            <Router>
                <div>
                    <div className='nav-tags links'>
                        {/* <Link to='/howitworks'>How It Works</Link> */}
                        <Link to='/products'>Search Products <FaSearch /></Link>
                    </div>
                    <div className='account-tags links'>
                        <Link to='/login'>Sign In<FiUser /></Link> {/* Will toggle with FiUserCheck after signing in */}
                        <Link to='/cart'>My Cart<FiShoppingCart /></Link>
                    </div>
                    <Route exact path="/" component={Home} />
                    {/* <Route path="/howitworks" component={HowItWorks} /> */}
                    <Route path="/products" component={Products} />
                    <Route path="/login" component={Login} />
                    <Route path="/cart" component={Cart} /> 
                </div>
            </Router>
        </div>
    )
}

export default Nav;