import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaRegThumbsUp, FaSearch } from 'react-icons/fa';
import { FiShoppingCart, FiThumbsUp, FiUserCheck, FiUser } from 'react-icons/fi';
import '../styling/Nav.css';


export default class Nav extends Component {

    state = {
        user: null,
    }

    render() {
        const { user } = this.state;
        console.log('user is: ', user)

        return (
                <nav className="nav-bar">
                    <div className='logo'>
                        <a href='/'><img src='https://tbncdn.freelogodesign.org/985834d1-1891-43a0-ba41-76dcc9cea295.png?1552172962507' alt='logo'/></a>
                    </div>
                    <ul className="nav-tags links">
                        <a href='/products'>
                            <Link className="links" to="/products">Search <FaSearch /></Link>
                        </a>
                        <a href='/cart' className="nav-item">
                            <Link className="links" to="/cart">My Box <FiShoppingCart /></Link>
                        </a>
                        <a href='/logout' className="nav-item">
                            <Link className="links" to="/logout">Logout</Link>
                        </a>
                        <a href='/signup' className="nav-item">
                            <Link className="links" to="/signup">Sign Up <FiUser /></Link>
                        </a>
                        <a href='/login' className="nav-item">
                            <Link className="links" to="/login">Sign In <FiUser /></Link>
                        </a>
                    </ul>
                </nav>
        )
    }
}