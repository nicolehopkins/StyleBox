import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import { FaGrinStars, FaSearch, FaUserAltSlash } from 'react-icons/fa';
import { FiShoppingCart, FiUserCheck, FiUser } from 'react-icons/fi';
import '../styling/Nav.css';
import logo from '../sources/LogoMakr_7S4VGV.png'
import AuthContext from '../contexts/auth';


export default class Nav extends Component {

    state = {
        user: null,
    }

    render() {
        const { user } = this.state;

        const defaultNav = <nav className="nav-bar">
                                <div className='logo'>
                                    <a href='/'><img src={logo} alt='logo'/></a>
                                </div>
                                <div>
                                <ul className="nav-tags links left">
                                    <a href='/products'>
                                        <Link className="links" to="/products"><FaSearch /> Browse Products </Link>
                                    </a>
                                </ul>
                                <ul className="nav-tags links right">
                                    <a href='/login' className="nav-item">
                                        <Link className="links" to="/login"><FiUser /> Sign In </Link>
                                    </a>
                                </ul>
                                </div>
                            </nav> 

        const userNav =  <nav className="nav-bar">
                            <div className='logo'>
                                <a href='/'><img src={logo} alt='logo'/></a>
                            </div>
                            <ul className="nav-tags links left">
                                <a href='/products'>
                                    <Link className="links" to="/products"><FaSearch /> Browse Products </Link>
                                </a>
                                <a href='/cart' className="nav-item">
                                    <Link className="links" to="/cart"><FiShoppingCart /> My Cart </Link>
                                </a>
                            </ul>
                            <a href='/logout' className="nav-item">
                                <Link className="links" to="/myaccount"><FiUserCheck /> My Account </Link>
                            </a>
                            <ul className="nav-tags links right">
                                <a href='/logout' className="nav-item">
                                    <Link className="links" to="/logout"><FaUserAltSlash/> Logout</Link>
                                </a>
                            </ul>
                        </nav>
    
        return(
            <AuthContext.Consumer>
                {
                    (user) => {
                        if (user) return userNav
                        else return defaultNav;
                    }
                }
            </AuthContext.Consumer>
        )
    }
}