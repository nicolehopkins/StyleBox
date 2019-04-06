import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaUserAltSlash } from 'react-icons/fa';
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
        console.log('user is: ', user)

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
                                    <a href='/logout' className="nav-item">
                                        <Link className="links" to="/logout"><FaUserAltSlash/>Logout</Link>
                                    </a>
                                </ul>
                                </div>
                            </nav>

        const userNav =  <nav className="nav-bar">
                            <div className='logo'>
                                <a href='/'><img src='https://tbncdn.freelogodesign.org/985834d1-1891-43a0-ba41-76dcc9cea295.png?1552172962507' alt='logo'/></a>
                            </div>
                            <ul className="nav-tags links left">
                                <a href='/products'>
                                    <Link className="links" to="/products">Search <FaSearch /></Link>
                                </a>
                                <a href='/cart' className="nav-item">
                                    <Link className="links" to="/cart">My Cart <FiShoppingCart /></Link>
                                </a>
                            </ul>
                            <a href='/logout' className="nav-item">
                                <Link className="links" to="/logout">My Account <FiUserCheck /></Link>
                            </a>
                            <ul className="nav-tags links right">
                                <a href='/logout' className="nav-item">
                                    <Link className="links" to="/logout">Logout</Link>
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