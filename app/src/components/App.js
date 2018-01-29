
// Imports

import * as React from 'react';
import * as _ from 'lodash';

import fireApp from '../utils/fireApp';

import { maths, net } from 'varyd-utils';

import LoginView from './LoginView';
import Sidebar from './Sidebar';
import CustomizeView from './CustomizeView';


// Constants

const Settings = {
  LOG_IN_AUTOMATICALLY: false
};

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

    this.loadAppData();

    if (Settings.LOG_IN_AUTOMATICALLY) {
      this.startFirebase();
    }

  }

  initBindings() {

    this.handleModeChange       = this.handleModeChange.bind(this);
    this.handleLogInAnonymously = this.handleLogInAnonymously.bind(this);

  }
  initState() {

    this.state = {

      appLoaded: false,
      user: undefined,

      mode: 'track'

    }

  }


  // Event handlers

  handleDataLoad(data) {

    App.config    = data[0];

    this.setState({
      appLoaded: true
    });

  }

  handleLogInAnonymously() {

    this.startFirebase();

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

  startFirebase() {

    this.unsubscribeAuth = fireApp.auth().onAuthStateChanged((user) => {
      this.setState({
        user: user
      })
    });

  }



  // React

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
      return (
        <LoginView
          onLogInAnonymously={this.handleLogInAnonymously}/>
      );

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
