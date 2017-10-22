
// Imports

import * as React from 'react';
import * as classNames from 'classnames';

import App from './App';


// Constants


// Component

export default class EditTableCell extends React.Component {

  // Constructor

  constructor() {

    super();

  }


  // React

  render() {

    const value    = this.props.value,
          activity = this.props.activity;

    if (value === undefined) {
      return (<td />);
    }

    return (
      <td
        className={ 'weight-' + value.weight }>
        {value.weight}
      </td>
    );

  }

}
