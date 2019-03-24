import React from 'react';
import firebase from '../firebase';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import '../styling/Login.css';


class Login extends React.Component {

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
    const { email, password, error} = this.state
    const displayError = error === '' ? '' : <div className="alert alert-danger" role="alert">{error}</div>

    return (
      <div>
      <Form>
        <FormGroup>
          <Label className='label' for="exampleEmail">Email</Label>
          <Input className='input center' type="email" name="email" id="exampleEmail" placeholder="enter email" />
        </FormGroup>
        <FormGroup>
          <Label className='label' for="examplePassword">Password</Label>
          <Input className='input center' type="password" name="password" id="examplePassword" placeholder="enter password" />
        </FormGroup>
        <Button className='button'>Submit</Button>
      </Form>
      </div>
    );
  }
}


export default Login;