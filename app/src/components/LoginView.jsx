
// Imports

import * as React from 'react';
import * as classNames from 'classnames';

import App from './App';


// Constants


// Component

export default class LoginView extends React.Component {

  // Constructor

  constructor() {

    super();

    this.initState();

  }

  initState() { }


  // Event handlers

  handleGoogleLoginClick = () => {
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

        </div>

      </section>

    );

  }

}
