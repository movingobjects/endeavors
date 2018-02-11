
// Imports

import * as React from 'react';
import * as classNames from 'classnames';

import firebase from 'firebase/app';

import App from './App';


// Constants


// Component

export default class CustomizeValueForm extends React.Component {

  // Constructor

  constructor() {

    super();

    this.initState();

  }

  initState() {

    this.state = {
      categories: undefined,
      valCategory: '',
      valLabel: ''
    }

  }


  // Event handlers

  handleCategoriesValue = (data) => {

    const categories     = data.val() ? data.val() : { },
          hasValCategory = this.state.valCategory && this.state.valCategory.length,
          valCategory    = hasValCategory ? this.state.valCategory : _.keys(categories)[0];

    this.setState({
      categories: categories,
      valCategory: valCategory
    });

  }
  handleInputChange = (e) => {

    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    })

  }
  handleSubmit = (e) => {

    e.preventDefault();

    if (this.validate()) {

      const value  = {
        category_key: this.state.valCategory,
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

    const hasCategory =
      this.state.valCategory &&
      this.state.valCategory.length;

    const hasLabel =
      this.state.valLabel &&
      this.state.valLabel.length;

    return hasCategory && hasLabel;

  }


  // React

  componentDidMount() {

    const userId  = firebase.auth().currentUser.uid;

    this.categoriesRef = firebase.database().ref(`categories/${userId}`);
    this.valuesRef     = firebase.database().ref(`values/${userId}`);

    this.categoriesRef.on('value', this.handleCategoriesValue);

  }

  componentWillUnmount() {

    if (this.categoriesRef) this.categoriesRef.off('value', this.handleCategoriesValue);

  }

  render() {

    return (
      <form
        className='value-input'
        onSubmit={this.handleSubmit}>

        <h3>Add Value</h3>

        <p>
          <label
            htmlFor='value-select-category'>
            Category
          </label>
        </p>

        <p>
          <select
            id='value-select-category'
            name='valCategory'
            value={this.state.valCategory}
            onChange={this.handleInputChange}>
            {_.map(this.state.categories, (category, catKey) => (
              <option
                key={catKey}
                value={catKey}>
                {category.label}
              </option>
            ))}
          </select>
        </p>

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
