
// Imports

import * as React from 'react';
import * as _ from 'lodash';

import fireApp from '../utils/fireApp';

import { maths, net } from 'varyd-utils';

import EditTable from './EditTable';


// Constants

const DATA_PATHS = [
  'assets/config.json'
];


// Class

export default class App extends React.Component {

  // Constructor

  constructor() {

    super();

    this.initBindings();
    this.initState();
    this.initFirebase();

    this.loadAppData();

  }

  initBindings() {

    this.handleFirebaseAuthStateChange = this.handleFirebaseAuthStateChange.bind(this);
    this.handleFirebaseLogInError      = this.handleFirebaseLogInError.bind(this);

  }
  initState() {

    this.state = {
      appLoaded: false,
      user: undefined
    }

  }
  initFirebase() {

    fireApp.auth().onAuthStateChanged(this.handleFirebaseAuthStateChange);

  }


  // Event handlers

  handleDataLoad(data) {

    App.config    = data[0];

    this.setState({
      appLoaded: true
    });

  }
  handleDataError(error) {

    console.log(error);

  }


  handleFirebaseAuthStateChange(user) {

    this.setState({
      user: user
    })

  }
  handleFirebaseLogInError(error) {

    console.log(error);

  }


  // Methods

  loadAppData() {

    Promise.all(DATA_PATHS.map((url) => net.xhrFetch(url)))
      .then((responses) => Promise.all(responses.map((r) => r.json())))
      .then((responses) => this.handleDataLoad(responses))
      .catch((error) => this.handleDataError(error));

  }

  logInFirebase() {

    fireApp.auth().signInAnonymously().catch(this.handleFirebaseLogInError);

  }


  // React

  componentDidMount() {

    this.unsubscribeAuth = fireApp.auth().onAuthStateChanged(this.handleFirebaseAuthStateChange);

    this.logInFirebase();

  }

  componentWillUnmount() {

    if (this.unsubscribeAuth) {
      this.unsubscribeAuth();
    }

  }

  render() {

    const loggedIn = this.state.user;

    if (!this.state.appLoaded) {
      return null;

    } else if (!loggedIn) {
      return null; // TODO: splash screen component

    } else {
      return <EditTable />;
    }

  }

}
