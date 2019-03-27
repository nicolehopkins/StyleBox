import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import firebase from '../firebase';
import AuthContext from '../contexts/auth';

export default class Signup extends Component {

    state = {
      email: '',
      password: '',
      error: ''
    }
  
    handleChange = (e) => {
      this.setState({ [e.target.name]: e.target.value });
    }
  
    handleSubmit = (e) => {
      e.preventDefault(); // this prevents the default browser action when submitting info, which is to pass the info as params in the site address
  
      const { email, password } = this.state;
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((response) => {
          console.log('Returns: ', response);
        })
        .catch(err => {
          const { message } = err;
          this.setState({ error: message });
        })
    }
  
  
    render() {
      const { email, password, error } = this.state;
      const displayError = error === '' ? '' : <div className="alert alert-danger" role="alert">{error}</div>
      const displayForm = <>
                <h1>Sign Up</h1>
                {displayError}
                <form>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email</label>
                    <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter email" name="email" value={email} onChange={this.handleChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" placeholder="Password" value={password} name="password" onChange={this.handleChange} />
                  </div>
                  <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Sign Up</button>
                </form>
                </>;
  
      return (
        <AuthContext.Consumer >
          {
            (user) => {
              if (user) {
                return <Redirect to='/products' />
              }
              else {
                return displayForm;
              }
            }
          }
        </AuthContext.Consumer>
        
      );
    }
}