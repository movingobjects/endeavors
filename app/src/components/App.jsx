
// Imports

import * as React from 'react';
import * as _ from 'lodash';
import firebase from 'firebase/app';

import { maths, net } from 'varyd-utils';

import LoginView from './LoginView';
import Sidebar from './Sidebar';

import TrackView from './TrackView';
import EvaluateView from './EvaluateView';
import SettingsView from './SettingsView';

import CustomizeView from './customize/CustomizeView';


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
