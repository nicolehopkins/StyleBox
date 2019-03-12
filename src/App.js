import React, { Component } from 'react';
import 'reactstrap';
import './index';
import './index.css';
import Nav from './components/Nav';
import Home from './components/Home';
// import Axios from 'axios';


class App extends Component {
  render() {
    return (
      <>
        <Nav />
        <Home />
      </>
    );
  }
}

export default App;
