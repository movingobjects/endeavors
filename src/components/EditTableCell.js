
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

    this.initBindings();
    this.initState();

  }

  initBindings() {

    this.handleWeightChange  = this.handleWeightChange.bind(this);

  }
  initState() {

    this.state = {
      editing: false
    }

  }

  // Event handlers

  handleWeightChange(e) {

    const actKey     = this.props.actKey,
          valLinkKey = this.props.valLinkKey,
          weight     = e.currentTarget.value;


    if (this.props.onWeightChange) {
      this.props.onWeightChange(actKey, valLinkKey, weight);
    }

  }


  // React

  render() {

    const actKey     = this.props.actKey,
          activity   = this.props.activity,
          valLinkKey = this.props.valLinkKey,
          valLink    = activity && activity.values ? activity.values[valLinkKey] : undefined,
          weight     = valLink ? valLink.weight : 0;

    const classes = classNames({
      ['weight-' + weight]: true,
      editing: this.state.editing
    });

    return (
      <td
        className={classes}>

        <input
          type='text'
          onChange={this.handleWeightChange}
          value={weight} />

      </td>
    );

  }

}
