import React, { Component } from 'react';
import firebase from '../firebase';

export default class Logout extends Component {

  componentDidMount() {
    firebase.auth().signOut()
  }

  render() {
    return <h1>Until We Meet Again...</h1>
  }
}