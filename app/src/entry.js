
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

import './styles/style.scss';

import App from './components/App';


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

  // TODO: remove, this prevents session from continuing after
  // window is closed
  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE);

}

function initApp() {

  const element   = document.getElementById('app'),
        component = React.createElement(App);

  ReactDOM.render(component, element);

}
