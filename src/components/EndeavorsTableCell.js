
// Imports

import * as React from 'react';
import * as classNames from 'classnames';

import App from './App';


// Constants


// Component

export default class EndeavorsTableCell extends React.Component {

  // Constructor

  constructor() {

    super();

  }


  // React

  render() {

    const endeavor  = this.props.endeavor,
          activity  = this.props.activity;

    if (endeavor === undefined) {
      return (<td />);
    }

    return (
      <td
        className={ 'weight-' + endeavor.weight }>
        {endeavor.weight}
      </td>
    );

  }

}
