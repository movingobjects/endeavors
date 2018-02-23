
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

import './styles/style.scss';

import App from './components/App';

const DEBUG_SIGN_OUT = false;


initFirebase();
initApp();

function initFirebase() {

  firebase.initializeApp({
    apiKey: "AIzaSyCfceUvLUQrPJTWx-OBN82FtEZe3DKEfNs",
    authDomain: "endeavorsssss.firebaseapp.com",
    databaseURL: "https://endeavorsssss.firebaseio.com",
    projectId: "endeavorsssss",
    storageBucket: "endeavorsssss.appspot.com",
    messagingSenderId: "589591316736"
  });

}

function initApp() {

  if (DEBUG_SIGN_OUT) {
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE);
    firebase.auth().signOut();
    window.location = "https://mail.google.com/mail/u/0/?logout&hl=en";
    return;
  }

  const element   = document.body.appendChild(document.createElement('div')),
        component = React.createElement(App);

  ReactDOM.render(component, element);

}
