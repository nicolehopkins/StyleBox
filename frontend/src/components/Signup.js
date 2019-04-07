import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import firebase from '../firebase';
import AuthContext from '../contexts/auth';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../styling/Signup.css'


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
      const displayForm = <div className='form-container'>
                          <div>
                            <h3>Sign Up</h3>
                            {displayError}
                            <Form className='form-divider'>
                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                              <Label for="exampleEmail" className="mr-sm-2">Email</Label>
                              <Input value={email} type="email" name="email" id="exampleEmail" placeholder="something@idk.cool" onChange={this.handleChange}/>
                            </FormGroup>
                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                              <Label for="examplePassword" className="mr-sm-2">Password</Label>
                              <Input value={password} type="password" name="password" id="examplePassword" placeholder="don't tell!" onChange={this.handleChange} />
                            </FormGroup>
                            <Button className='button' type="submit" onClick={this.handleSubmit}>Submit</Button>
                            </Form>
                          </div>
                          <div className='divider-bottom'>
                            <h3>Already Have an Account?</h3>
                            <a href='/login' className="nav-item">
                              <h3><Link className="blue-links" to="/login">Sign In </Link></h3>
                            </a>
                          </div>
                          </div>
  
      return (
        <AuthContext.Consumer >
          {
            (user) => {
              if (user) return <Redirect to='/products' />
              else return displayForm;
            }
          }
        </AuthContext.Consumer>
      );
    }
}