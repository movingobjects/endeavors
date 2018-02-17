
// Imports

import * as React from 'react';
import * as _ from 'lodash';
import firebase from 'firebase/app';

import { maths, net } from 'varyd-utils';

import LoginView from './login/LoginView';
import SidebarView from './sidebar/SidebarView';

import TrackView from './track/TrackView';
import EvaluateView from './evaluate/EvaluateView';
import CustomizeView from './customize/CustomizeView';
import SettingsView from './settings/SettingsView';


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

  handleModeChange = (newMode) => {

    this.setState({
      mode: newMode
    });

  }

  handleGoogleLoginClick = () => {

    let provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
      .then((result) => console.log(result))
      .catch((error) => console.log(error));

  }


  // Methods


  // React

  componentWillUnmount() {

    if (this.unsubscribeAuth) {
      this.unsubscribeAuth();
    }

  }

  render() {

    if (!this.state.user) return (
      <LoginView
        onGoogleLoginClick={this.handleGoogleLoginClick}/>
    );

    const isTrack     = this.state.mode === 'track',
          isEvaluate  = this.state.mode === 'evaluate',
          isCustomize = this.state.mode === 'customize',
          isSettings  = this.state.mode === 'settings';

    return (

      <div
        className='wrap-all'>

        <SidebarView
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
