
// Imports

import * as React from 'react';
import * as _ from 'lodash';
import firebase from 'firebase/app';

import { maths, net } from 'varyd-utils';

import LoginView from './LoginView';
import Sidebar from './Sidebar';

import TrackView from './TrackView';
import EvaluateView from './EvaluateView';
import CustomizeView from './CustomizeView';
import SettingsView from './SettingsView';


// Constants


// Class

export default class App extends React.Component {

  // Constructor

  constructor() {

    super();

    this.initState();
    this.initFirebase();

  }

  initState() {

    this.state = {
      user: undefined,
      mode: 'track'
    }

  }
  initFirebase() {

    this.unsubscribeAuth = firebase.auth().onAuthStateChanged((user) => {
      this.setState({
        user: user
      })
    });

  }


  // Event handlers

  handleGoogleLoginClick = () => {

    console.log(`Google login!`);

  }
  handleAnonymousLoginClick = () => {

    firebase.auth().signInAnonymously().catch((error) => {
      console.log(error)
    });

  }

  handleModeChange = (newMode) => {

    this.setState({
      mode: newMode
    });

  }


  // Methods

  logInFirebase() {


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
        onGoogleLoginClick={this.handleGoogleLoginClick}
        onAnonymousLoginClick={this.handleAnonymousLoginClick}/>
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
