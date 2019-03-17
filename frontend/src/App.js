import React, { Component } from 'react';
import 'reactstrap';
// import { HashRouter, Route, Link, Switch } from 'react-router-dom';
import './index';
import './index.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Products from './components/Products';
// import Axios from 'axios';


class App extends Component {
  render() {
    return (
      <div>
        <Nav />
      </div>
 
    );
  }
}

export default App;
