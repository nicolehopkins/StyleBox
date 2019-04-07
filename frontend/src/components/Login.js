import React, { Component } from 'react';
import firebase from '../firebase';
import AuthContext from '../contexts/auth';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import { Link, Redirect } from 'react-router-dom';
import '../styling/Login.css';


export default class Login extends Component {

  state = {
    email: '',
    password: '',
    error: '',
  } 

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = this.state;
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((response) => {
        console.log('Returns: ', response);
      })
      .catch(err => {
        const { message } = err;
        this.setState({ error: message });
      })
  }

  componentDidMount() {
    this.unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // ..... DO YOUR LOGGED IN LOGIC
        this.props.history.push('/')
      }
      else {
        // ..... The user is logged out
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const { email, password, error } = this.state;
    const displayError = error === '' ? '' : <div className="alert alert-danger" role="alert">{error}</div>
    const displayLogIn = <div className='form-container'>
                        <h3>Login</h3>
                        {displayError}
                        <Form className='form-divider'>
                          <div className="form-group">
                            <Label htmlFor="exampleInputEmail1">Email</Label>
                            <Input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter email" name="email" value={email} onChange={this.handleChange} />
                          </div>
                          <div className="form-group">
                            <Label htmlFor="exampleInputPassword1">Password</Label>
                            <Input type="password" className="form-control" placeholder="Password" value={password} name="password" onChange={this.handleChange} />
                          </div>
                          <Button type="submit" className="button" onClick={this.handleSubmit}>Login</Button>
                        </Form>
                        <div className="divider-bottom">
                        <h3>Don't Have An Account Yet?</h3>
                        <div>
                          <a href='/signup' className="nav-item">
                            <h3><Link className="blue-links" to="/signup">Sign Up </Link></h3>
                          </a>
                        </div>
                      </div>
                      </div>;


    return (
      <AuthContext.Consumer>
        {
          (user) => {
            if (user) return <Redirect to ='/myaccount' />
            else return displayLogIn;
          }
        }
      </AuthContext.Consumer>

    )
  }
}