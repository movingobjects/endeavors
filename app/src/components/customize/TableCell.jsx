
// Imports

import * as React from 'react';
import * as classNames from 'classnames';

import App from './App';


// Constants


// Component

export default class CustomizeTableCell extends React.Component {

  // Constructor

  constructor() {

    super();

    this.initState();

  }

  initState() {

    this.state = {
      editing: false
    }

  }

  // Event handlers

  handleInputFocus = (e) => {

    this.setState({
      editing: true
    });

  }
  handleInputBlur = (e) => {
    this.setState({
      editing: false
    });
  }

  handleWeightChange = (e) => {

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
          type='number'
          onFocus={this.handleInputFocus}
          onBlur={this.handleInputBlur}
          onChange={this.handleWeightChange}
          value={weight} />

      </td>
    );

  }

}
