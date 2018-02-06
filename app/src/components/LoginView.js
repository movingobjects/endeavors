
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
    this.handleLogInClick = this.handleLogInClick.bind(this);
  }
  initState() { }


  // Event handlers

  handleLogInClick() {
    this.props.onLogInSelect();
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
              onClick={this.handleLogInClick}>
              Log in Anonymously
            </button>
          </p>

        </div>

      </section>

    );

  }

}