
// Imports

import * as React from 'react';
import * as classNames from 'classnames';

import App from './App';
import CustomizeTable from './CustomizeTable';
import CustomizeValueForm from './CustomizeValueForm';
import CustomizeActivityForm from './CustomizeActivityForm';


// Constants


// Component

export default class LoginView extends React.Component {

  // Constructor

  constructor() {

    super();

    this.initBindings();
    this.initState();

  }

  initBindings() {
    this.handleAnonymousLoginClick = this.handleAnonymousLoginClick.bind(this);
    this.handleGoogleLoginClick    = this.handleGoogleLoginClick.bind(this);
  }
  initState() { }


  // Event handlers

  handleAnonymousLoginClick() {
    this.props.onAnonymousLoginClick();
  }

  handleGoogleLoginClick() {
    this.props.onGoogleLoginClick();
  }


  // Methods


  // React

  render() {

    const classSection = classNames({
      'login': true
    })

    return (
      <section
        className={classSection}>

        <div className='login-panel'>

          <h1>
            Endeavors
          </h1>

          <p>
            <button
              onClick={this.handleGoogleLoginClick}>
              Log in with Google
            </button>
          </p>

          <p>
            <button
              onClick={this.handleAnonymousLoginClick}>
              Log in Anonymously
            </button>
          </p>

        </div>

      </section>

    );

  }

}
