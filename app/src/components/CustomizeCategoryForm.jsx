
// Imports

import * as React from 'react';
import * as classNames from 'classnames';

import firebase from 'firebase/app';

import App from './App';


// Constants


// Component

export default class CustomizeCategoryForm extends React.Component {

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

      const category  = {
        label: this.state.valLabel
      };

      this.categoriesRef.push(category, (error) => {

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

    this.categoriesRef = firebase.database().ref(`categories/${userId}`);

  }

  render() {

    return (
      <form
        className='category-input'
        onSubmit={this.handleSubmit}>

        <h3>Add Category</h3>

        <p>
          <label
            htmlFor='category-input-label'>Label</label>
        </p>

        <p>
          <input
            id='category-input-label'
            type='text'
            name='valLabel'
            value={this.state.valLabel}
            onChange={this.handleInputChange}/>
        </p>

        <p>
          <input
            id='category-input-submit'
            type='submit'
            disabled={!this.validate()}/>
        </p>

      </form>
    );

  }

}
