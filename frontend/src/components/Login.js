import React, { Component } from "react";
import firebase from "../firebase";
import AuthContext from "../contexts/auth";
import { Link, Redirect } from "react-router-dom";
import "../styling/Login.css";

export default class Login extends Component {
  state = {
    email: "",
    password: "",
    error: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { email, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        console.log("Returns: ", response);
      })
      .catch(err => {
        const { message } = err;
        this.setState({ error: message });
      });
  };

  componentDidMount() {
    this.unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        // ..... DO YOUR LOGGED IN LOGIC
        this.props.history.push("/");
      } else {
        // ..... The user is logged out
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const { email, password, error } = this.state;
    const displayError =
      error === "" ? (
        ""
      ) : (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      );
    const displayLogIn = (
      <>
        <div className="form-container">
          <div className="form" style={{ padding: '20%' }}>
            <h3>Login</h3>
            {displayError}
            <div className="row" style={{ width: '80vh'}}>
              <form className="col s12">
                <div className="row">
                  <div className="input-field col s12">
                    <input id="email" type="email" className="validate" value={email} onChange={this.handleChange} />
                    <label for="email">Email</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input id="password" type="password" className="validate" value={password} onChange={this.handleChange}/>
                    <label for="password">Password</label>
                  </div>
                </div>
              </form>
            </div>
            <button
              type="submit"
              className="button"
              onClick={this.handleSubmit}
            >
              Login
            </button>

            <div className="divider-bottom">
              <h3>Don't Have An Account Yet?</h3>
              <div>
                <Link className="blue-links" to="/signup">
                  <h3>Sign Up </h3>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    );

    return (
      <AuthContext.Consumer>
        {user => {
          if (user) return <Redirect to="/myaccount" />;
          else return displayLogIn;
        }}
      </AuthContext.Consumer>
    );
  }
}
