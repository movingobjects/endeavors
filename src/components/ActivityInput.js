
// Imports

import * as React from 'react';
import * as classNames from 'classnames';

import fireApp from '../utils/fireApp';

import App from './App';


// Constants


// Component

export default class ActivityInput extends React.Component {

  // Constructor

  constructor() {

    super();

    this.initBindings();
    this.initState();

  }

  initBindings() {

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit      = this.handleSubmit.bind(this);

  }
  initState() {

    this.state = {
      valLabel: ''
    }

  }

  // Event handlers

  handleInputChange(e) {

    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    })

  }
  handleSubmit(e) {

    e.preventDefault();

    if (this.state.valLabel && this.state.valLabel.length) {
      this.activitiesRef.push({
        label: this.state.valLabel
      }, (error) => {
        console.log(error);
      });
    }

  }


  // React

  componentDidMount() {

    const userId  = 'default';

    this.activitiesRef = fireApp.database().ref(`activities/${userId}`);

  }

  render() {

    return (
      <form
        className='activity-input'
        onSubmit={this.handleSubmit}>

        <h3>Add new Activity</h3>

        <label
          htmlFor='activity-input-label'>Label</label>

        <input
          id='activity-input-label'
          type='text'
          name='valLabel'
          value={this.state.valLabel}
          onChange={this.handleInputChange}/>

        <input
          type='submit' />

      </form>
    );

  }

}
