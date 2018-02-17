
// Imports

import * as React from 'react';
import * as classNames from 'classnames';

import firebase from 'firebase/app';

import App from '../App';


// Constants


// Component

export default class ValueForm extends React.Component {

  // Constructor

  constructor() {

    super();

    this.initState();

  }

  initState() {

    this.state = {
      valLabel: ''
    }

  }


  // Event handlers

  handleInputChange = (e) => {

    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    })

  }
  handleSubmit = (e) => {

    e.preventDefault();

    if (this.validate()) {

      const value  = {
        label: this.state.valLabel
      };

      this.valuesRef.push(value, (error) => {

        if (!error) {
          this.clearInput();
        }

      });

    }

  }


  // Methods

  clearInput() {

    this.setState({
      valLabel: ''
    });

  }

  validate() {

    const hasLabel =
      this.state.valLabel &&
      this.state.valLabel.length;

    return hasLabel;

  }


  // React

  componentDidMount() {

    const userId  = firebase.auth().currentUser.uid;

    this.valuesRef     = firebase.database().ref(`values/${userId}`);

  }

  render() {

    return (
      <form
        className='value-input'
        onSubmit={this.handleSubmit}>

        <h3>Add Value</h3>

        <p>
          <label
            htmlFor='value-input-label'>
            Label
          </label>
        </p>

        <p>
          <input
            id='value-input-label'
            type='text'
            name='valLabel'
            value={this.state.valLabel}
            onChange={this.handleInputChange}/>
        </p>

        <p>
          <input
            id='value-input-submit'
            type='submit'
            disabled={!this.validate()}/>
        </p>

      </form>
    );

  }

}
