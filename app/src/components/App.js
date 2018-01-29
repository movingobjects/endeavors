
// Imports

import * as React from 'react';
import * as _ from 'lodash';

import fireApp from '../utils/fireApp';

import { maths, net } from 'varyd-utils';

import LoginView from './LoginView';
import Sidebar from './Sidebar';

import TrackView from './TrackView';
import EvaluateView from './EvaluateView';
import CustomizeView from './CustomizeView';
import SettingsView from './SettingsView';


// Constants

const Settings = {
  LOG_IN_AUTOMATICALLY: false
};


// Class

export default class App extends React.Component {

  // Constructor

  constructor() {

    super();

    this.initBindings();
    this.initState();

    if (Settings.LOG_IN_AUTOMATICALLY) {
      this.startFirebase();
    }

  }

  initBindings() {

    this.handleModeChange = this.handleModeChange.bind(this);
    this.handleLogIn      = this.handleLogIn.bind(this);

  }
  initState() {

    this.state = {

      user: undefined,

      mode: 'track'

    }

  }


  // Event handlers

  handleLogIn() {

    this.startFirebase();

  }

  handleModeChange(newMode) {

    this.setState({
      mode: newMode
    });

  }


  // Methods

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

    if (!this.state.user) return (
      <LoginView
        onLogIn={this.handleLogIn}/>
    );

    const isTrack     = this.state.mode === 'track',
          isEvaluate  = this.state.mode === 'evaluate',
          isCustomize = this.state.mode === 'customize',
          isSettings  = this.state.mode === 'settings';

    return (

      <div
        className='wrap-all'>

        <Sidebar
          mode={this.state.mode}
          onModeChange={this.handleModeChange}/>

        <main>

          {isTrack && (
            <TrackView />
          )}

          {isEvaluate && (
            <EvaluateView />
          )}

          {isCustomize && (
            <CustomizeView />
          )}

          {isSettings && (
            <SettingsView />
          )}

        </main>

      </div>

    );

  }

}
