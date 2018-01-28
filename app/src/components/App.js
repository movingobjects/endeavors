
// Imports

import * as React from 'react';
import * as _ from 'lodash';

import fireApp from '../utils/fireApp';

import { maths, net } from 'varyd-utils';

import Sidebar from './Sidebar';
import CustomizeView from './CustomizeView';


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

    this.handleModeChange = this.handleModeChange.bind(this);

  }
  initState() {

    this.state = {

      appLoaded: false,
      user: undefined,

      mode: 'track'

    }

  }
  initFirebase() {

    fireApp.auth().onAuthStateChanged((user) => {
      this.setState({
        user: user
      })
    });

  }


  // Event handlers

  handleDataLoad(data) {

    App.config    = data[0];

    this.setState({
      appLoaded: true
    });

  }

  handleModeChange(newMode) {

    this.setState({
      mode: newMode
    });

  }


  // Methods

  loadAppData() {

    Promise.all(DATA_PATHS.map((url) => net.xhrFetch(url)))
      .then((responses) => Promise.all(responses.map((r) => r.json())))
      .then((responses) => this.handleDataLoad(responses))
      .catch((error) => console.log(error));

  }

  logInFirebase() {

    fireApp.auth().signInAnonymously().catch((error) => {
      console.log(error)
    });

  }


  // React

  componentDidMount() {

    this.unsubscribeAuth = fireApp.auth().onAuthStateChanged((user) => {
      this.setState({
        user: user
      })
    });

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
      return (

        <div
          className='wrap-all'>

          <Sidebar
            mode={this.state.mode}
            onModeChange={this.handleModeChange}/>

          <main>

            {(this.state.mode === 'customize') && (
              <CustomizeView />
            )}

          </main>

        </div>

      )
    }

  }

}
