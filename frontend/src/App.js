import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import 'reactstrap';
import firebase from './firebase';

// ---- Pages
import Nav from './containers/Nav';
import Home from './containers/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import Logout from './containers/Logout';
import Products from './components/Products';
import Cart from './containers/Cart';
import Checkout from './containers/Checkout';
import Error404 from './components/Error404';


// ---- Context
import AuthContext from './contexts/auth';


class App extends Component {
  
  state = {
    user: null,
  }

  componentDidMount() {
    this.unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user: user })
      }
      else {
        this.setState({ user: null })
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    return (
      <HashRouter>
        <AuthContext.Provider value={this.state.user}>
          <Route path='/' component={ Nav } />
          <div className='container mt-5'>
            <Switch>
              <Route path='/' exact component={ Home } />
              <Route path='/signup' exact component={ Signup } />
              <Route path='/login' exact component={ Login } />
              <Route path='/logout' exact component={ Logout } />
              <Route path='/products' exact component={ Products } />
              <Route path='/cart' exact component={ Cart } />
              <Route path='/checkout' exact component={ Checkout } /> 
              <Route component={ Error404 } /> {/* this will show an error for any additional route the user may type in     */}
            </Switch>
          </div>
          </AuthContext.Provider>
      </HashRouter>
    );
  }
}

export default App;
