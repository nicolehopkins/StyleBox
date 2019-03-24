import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegThumbsUp, FaSearch } from 'react-icons/fa';
import { FiShoppingCart, FiThumbsUp, FiUserCheck, FiUser } from 'react-icons/fi';
import '../styling/Nav.css';


// ---- Pages
import Home from '../containers/Home';
import Products from '../components/Products';
import Login from '../components/Login';
import Cart from '../containers/Cart';
import Checkout from '../containers/Checkout'


export default class Nav extends React.Component {

    state = {
        user: null,
    }

    render() {
    const { user } = this.state;

    const userNav = <nav className="nav-bar">
                        <div className='logo'>
                            <a href='/'><img src='https://tbncdn.freelogodesign.org/985834d1-1891-43a0-ba41-76dcc9cea295.png?1552172962507' alt='logo'/></a>
                        </div>
                        <ul className="nav-tags links">
                            <li>
                                <Link className="links" to="/products">Search <FaSearch /></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="links" to="/cart">My Box <FiShoppingCart /></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="links" to="/logout">Logout</Link>
                            </li>
                        </ul>
                    </nav>


    const defaultNav = <nav className="nav-bar">
                            <div className='logo'>
                                <a href='/'><img src='https://tbncdn.freelogodesign.org/985834d1-1891-43a0-ba41-76dcc9cea295.png?1552172962507' alt='logo'/></a>
                            </div>
                            <ul className="nav-tags links">
                                <li>
                                    <Link className="links" to="/products">Search <FaSearch /></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="links" to="/signup">Sign Up <FiUser /></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="links" to="/login">Sign In <FiUser /></Link>
                                </li>
                            </ul>
                        </nav>

    if (user) {
        return userNav;
    } else {
        return defaultNav;
    }

}
}