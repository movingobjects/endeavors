
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

    const valLink = this.props.valLink,
          activity = this.props.activity;

    if (valLink === undefined) {
      return (<td />);
    }

    return (
      <td
        className={ 'weight-' + valLink.weight }>
        {valLink.weight}
      </td>
    );

  }

}
