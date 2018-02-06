
// Imports

import * as React from 'react';
import * as classNames from 'classnames';

import fireApp from '../utils/fireApp';

import App from './App';


// Constants


// Component

export default class CustomizeActivityForm extends React.Component {

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

    if (this.validate()) {

      const activity  = {
        label: this.state.valLabel
      };

      this.activitiesRef.push(activity, (error) => {

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

    const userId  = 'default';

    this.activitiesRef = fireApp.database().ref(`activities/${userId}`);

  }

  render() {

    return (
      <form
        className='activity-input'
        onSubmit={this.handleSubmit}>

        <h3>Add Activity</h3>

        <p>
          <label
            htmlFor='activity-input-label'>Label</label>
        </p>

        <p>
          <input
            id='activity-input-label'
            type='text'
            name='valLabel'
            value={this.state.valLabel}
            onChange={this.handleInputChange}/>
        </p>

        <p>
          <input
            id='activity-input-submit'
            type='submit'
            disabled={!this.validate()}/>
        </p>

      </form>
    );

  }

}
