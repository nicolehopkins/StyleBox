import React, { Component } from "react";
import firebase from "../firebase";

export default class Logout extends Component {
  componentDidMount() {
    firebase.auth().signOut();
  }

  render() {
    return (
      // <div>
        <div
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1502159212845-f31a19546a5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80')",
            height: "100vh",
            width: "100%"
          }}
        >
          <h1 style={{ color: 'white', textAlign: 'center' }}>Until We Meet Again...</h1>
        </div>
      // </div>
    );
  }
}
